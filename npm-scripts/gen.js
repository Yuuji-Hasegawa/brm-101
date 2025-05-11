import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const srcDir = path.join(process.cwd(), 'src/images')
const pubDir = path.join(process.cwd(), 'public/img')

if (!fs.existsSync(srcDir)) {
  console.error(`Error: The source directory "${srcDir}" does not exist.`)
  process.exit(1)
}

const cacheDir = path.join(process.cwd() + '/cache')
const cacheFile = path.join(cacheDir, '.imggencache')

if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir, { recursive: true })
}

let cacheData = {}
if (fs.existsSync(cacheFile)) {
  try {
    cacheData = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'))
  } catch (error) {
    console.error('Error reading cache file:', error)
  }
}

function ensureDirSync(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function getInOut(input, output) {
  let ret = []
  ret.push({ input, output })
  const dirs = fs.readdirSync(input)
  for (let dir of dirs) {
    let inputNext = path.join(input, dir)
    let outputNext = path.join(output, dir)
    if (fs.statSync(inputNext).isDirectory()) {
      ret.push(...getInOut(inputNext, outputNext))
    }
  }
  return ret
}

;(async () => {
  let dirs = getInOut(srcDir, pubDir)

  const promises = dirs.map(async (item) => {
    const files = fs
      .readdirSync(item.input)
      .filter((file) => /\.(jpg|jpeg|png|gif)$/.test(file))

    const filePromises = files.map(async (file) => {
      const filePath = path.join(item.input, file)
      const paths = path.parse(filePath)
      const filename = paths.name

      const cacheKey = filePath

      if (cacheData[cacheKey]) {
        console.log(`Skipping already processed: ${filePath}`)
        return
      }

      ensureDirSync(item.output)

      try {
        await sharp(filePath)
          .webp({ quality: 70 })
          .toFile(path.join(item.output, `${filename}.webp`))
        await sharp(filePath)
          .avif({ quality: 70 })
          .toFile(path.join(item.output, `${filename}.avif`))

        cacheData[cacheKey] = true
        console.log(`Processed: ${filePath}`)
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error)
      }
    })

    await Promise.all(filePromises)
  })

  await Promise.all(promises)

  try {
    fs.writeFileSync(cacheFile, JSON.stringify(cacheData, null, 2), 'utf-8')
    console.log('Cache updated successfully')
  } catch (error) {
    console.error('Error writing cache file:', error)
  }
})()
