const fs = require('fs')
const path = require('path')
const lessToJs = require('less-vars-to-js')

const THEME = lessToJs(fs.readFileSync(path.join(__dirname, './vars.less'), 'utf8'))

export default THEME
