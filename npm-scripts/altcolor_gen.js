import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

import {
  argbFromHex,
  Hct,
  hexFromArgb,
} from '@material/material-color-utilities'

dotenv.config()

const outputDir = path.join(process.cwd(), 'src/styles/settings')
const outputFile = path.join(outputDir, '_altcolors.scss')

function adjustTone(hex, ratio, lighten = true) {
  if (ratio < 0 || ratio > 1) {
    throw new Error('Ratio must be between 0 and 1')
  }

  const baseArgb = argbFromHex(hex)
  const baseHct = Hct.fromInt(baseArgb)
  let mixedTone

  if (lighten) {
    mixedTone = baseHct.tone + (100 - baseHct.tone) * ratio
  } else {
    mixedTone = baseHct.tone - baseHct.tone * ratio
  }

  const mixedHct = Hct.from(baseHct.hue, baseHct.chroma, mixedTone)
  return hexFromArgb(mixedHct.toInt())
}

function lighten(hex, ratio) {
  if (ratio > 0.5) {
    return adjustTone(hex, 1 - ratio, false)
  }
  return adjustTone(hex, ratio, true)
}

function darken(hex, ratio) {
  if (ratio > 0.5) {
    return adjustTone(hex, 1 - ratio, true)
  }
  return adjustTone(hex, ratio, false)
}

function generateTintShade(hex) {
  const colors = {
    lightTint: lighten(hex, 0.15),
    lightMiddle: hex,
    lightShade: darken(hex, 0.15),
    darkTint: lighten(lighten(hex, 0.4), 0.15),
    darkMiddle: lighten(hex, 0.4),
    darkShade: darken(lighten(hex, 0.4), 0.15),
  }
  return colors
}

const envVariables = Object.entries(process.env)
  .filter(([key, value]) => key.startsWith('COLOR_') && value)
  .reduce((acc, [key, value]) => {
    const variableName = key
      .replace(/^COLOR_/, '')
      .toLowerCase()
      .replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
    acc[variableName] = value
    return acc
  }, {})

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
  console.log(`Created directory: ${outputDir}`)
}

let sassContent = ''
Object.entries(envVariables).forEach(([name, hex]) => {
  const palette = generateTintShade(hex)

  sassContent += `$${name}: (\n`
  Object.entries(palette).forEach(([level, color]) => {
    sassContent += `  ${level}: ${color},\n`
  })
  sassContent += `) !default;\n\n`
})

fs.writeFileSync(outputFile, sassContent, 'utf8')
console.log(`Sass variables have been generated in ${outputFile}`)
