import { defineConfig } from 'umi'
import THEME from './src/styles/theme/theme.config'

export default defineConfig({
    dva: { immer: true, hmr: true, },
    antd: {},
    dynamicImport: {},
    theme: THEME
})
