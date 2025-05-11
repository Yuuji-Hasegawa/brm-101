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
const outputFile = path.join(outputDir, '_palette.scss')

const myColor = process.env.COLOR_MY_BRAND
  ? process.env.COLOR_MY_BRAND.toLowerCase()
  : '#007aff'
const envVariables = Object.entries(process.env)
  .filter(([key, value]) => key.startsWith('COLOR_REF_') && value)
  .reduce((acc, [key, value]) => {
    const variableName = key.replace(/^COLOR_REF_/, '').toLowerCase()
    acc[variableName] = value
    return acc
  }, {})

function generateCoreColors(hex) {
  const baseHct = Hct.fromInt(argbFromHex(hex))
  const hue = baseHct.hue
  const chroma = baseHct.chroma

  const colors = {
    primary: hexFromArgb(
      Hct.from(hue, Math.max(chroma, 48), baseHct.tone).toInt(),
    ),
    secondary: hexFromArgb(Hct.from(hue, 16, baseHct.tone).toInt()),
    tertiary: hexFromArgb(Hct.from(hue + 16, 24, baseHct.tone).toInt()),
    neutral: hexFromArgb(Hct.from(hue, 4, baseHct.tone).toInt()),
    neutralVariant: hexFromArgb(Hct.from(hue, 8, baseHct.tone).toInt()),
  }

  return colors
}

function generatePalette(hex) {
  const baseHct = Hct.fromInt(argbFromHex(hex))
  const tonalPalette = {}

  const levels = [
    0, 4, 5, 6, 10, 12, 15, 17, 20, 24, 25, 30, 35, 40, 50, 60, 70, 80, 87, 90,
    92, 94, 95, 96, 98, 99, 100,
  ]
  levels.forEach((level) => {
    tonalPalette[`level${level}`] = hexFromArgb(
      Hct.from(baseHct.hue, baseHct.chroma, level).toInt(),
    )
  })

  return tonalPalette
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
  console.log(`Created directory: ${outputDir}`)
}

const coreColors = generateCoreColors(myColor)

const palettes = {}
Object.entries(coreColors).forEach(([name, hex]) => {
  palettes[name] = generatePalette(hex)
})

const refPalettes = {}
Object.entries(envVariables).forEach(([name, hex]) => {
  refPalettes[name] = generatePalette(hex)
})

let sassContent = ''
Object.entries(palettes).forEach(([name, palette]) => {
  sassContent += `$ref-${name}: (\n`
  Object.entries(palette).forEach(([level, color]) => {
    sassContent += `  ${level}: ${color},\n`
  })
  sassContent += `) !default;\n\n`
})

Object.entries(refPalettes).forEach(([name, palette]) => {
  sassContent += `$ref-${name}: (\n`
  Object.entries(palette).forEach(([level, color]) => {
    sassContent += `  ${level}: ${color},\n`
  })
  sassContent += `) !default;\n\n`
})

fs.writeFileSync(outputFile, sassContent, 'utf8')
console.log(`Sass variables have been generated in ${outputFile}`)
