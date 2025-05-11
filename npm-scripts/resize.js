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
const cacheFile = path.join(cacheDir, '.imgresizecache')

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

const resizeWidths = [320, 640, 960, 1920]
const formats = [
  { ext: 'webp', options: { quality: 70 } },
  { ext: 'avif', options: { quality: 70 } },
  { ext: 'png', options: { compressionLevel: 8 } },
]

;(async () => {
  let dirs = getInOut(srcDir, pubDir)

  const promises = dirs.map(async (item) => {
    const files = fs
      .readdirSync(item.input)
      .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))

    const filePromises = files.map(async (file) => {
      const filePath = path.join(item.input, file)
      const filename = path.parse(file).name
      const ext = path.parse(file).ext.toLowerCase()

      for (let width of resizeWidths) {
        const resizedFilename = `${filename}-${width}${ext}`
        const resizedFilePath = path.join(item.output, resizedFilename)

        if (!cacheData[resizedFilePath]) {
          ensureDirSync(item.output)

          try {
            await sharp(filePath)
              .resize({ width, withoutEnlargement: true })
              .toFile(resizedFilePath)
            cacheData[resizedFilePath] = true
            console.log(`Resized: ${resizedFilePath}`)
          } catch (error) {
            console.error(
              `Error resizing ${filePath} (width: ${width}px):`,
              error,
            )
          }
        }

        for (let format of formats) {
          const convertedFilename = `${filename}-${width}.${format.ext}`
          const convertedFilePath = path.join(item.output, convertedFilename)

          if (!cacheData[convertedFilePath]) {
            try {
              await sharp(resizedFilePath)
                .toFormat(format.ext, format.options)
                .toFile(convertedFilePath)
              cacheData[convertedFilePath] = true
              console.log(`Converted: ${convertedFilePath}`)
            } catch (error) {
              console.error(
                `Error converting ${resizedFilePath} to ${format.ext}:`,
                error,
              )
            }
          }
        }
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
