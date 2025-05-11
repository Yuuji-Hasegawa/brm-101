import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const settings = [48, 72, 96, 144, 180, 192, 256, 384]
const target = path.join(process.cwd() + '/public/pwa/icons/icon.png')
const dir = path.parse(target).dir
const filename = path.parse(target).name

const cacheDir = path.join(process.cwd() + '/cache')
const cacheFile = path.join(cacheDir, '.iconcache')

if (!fs.existsSync(target)) {
  console.error(`Error: Target file "${target}" not found.`)
  process.exit(1)
}

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true })
}

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

;(async () => {
  try {
    await Promise.all(
      settings.map(async (size) => {
        const outputFile = `${dir}/${filename}-${size}x${size}.png`

        if (cacheData[outputFile]) {
          console.log(`Skipped (cached): ${outputFile}`)
          return
        }

        await sharp(target)
          .resize({ width: size, height: size })
          .toFile(outputFile)
        console.log(`Generated: ${outputFile}`)

        cacheData[outputFile] = true
      }),
    )

    fs.writeFileSync(cacheFile, JSON.stringify(cacheData, null, 2))
    console.log('Cache updated.')
  } catch (error) {
    console.error('Error resizing icons:', error)
  }
})()
