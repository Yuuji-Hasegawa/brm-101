import cssDeclarationSorter from 'css-declaration-sorter'
import postcssCombineMediaQuery from 'postcss-combine-media-query'
import postcssPresetEnv from 'postcss-preset-env'

export default {
  plugins: [
    postcssPresetEnv({
      stage: 3,
      autoprefixer: { grid: false },
      features: {
        'custom-properties': false,
      },
    }),
    cssDeclarationSorter({
      order: 'concentric-css',
    }),
    postcssCombineMediaQuery,
  ],
}
