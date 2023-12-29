import eslintConfigPrettier from 'eslint-config-prettier'
import customConfig from '.eslintrc.js'

export default [
  customConfig,
  // !should be the last one
  eslintConfigPrettier,
]