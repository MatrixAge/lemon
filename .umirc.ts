import { defineConfig } from 'umi'
import THEME from './src/styles/theme/theme.config'

export default defineConfig({
      theme: THEME,
      title: 'site.title',
      dva: { immer: true, hmr: true, },
      locale: { antd: true },
      antd: {},
      dynamicImport: {},
})
