const {override, addBabelPreset, addPostcssPlugins} = require('customize-cra')

module.exports = override(
  addPostcssPlugins([require('tailwindcss')]),
  addBabelPreset('@emotion/babel-preset-css-prop'),
)
