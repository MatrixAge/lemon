import path from 'path'
import { defineConfig } from 'umi'

export default defineConfig( {
      antd: {},
      cssnano: {},
      dynamicImport: {},
      locale: { antd: true },
      dva: { immer: true, hmr: true, },
      chainWebpack ( memo ) {
            memo.resolve.alias.set(
                  'moment$',
                  path.resolve(
                        __dirname,
                        "node_modules/moment/moment.js"
                  )
            )
      },
} )
