// https://github.com/shelljs/shelljs
require('./check-versions')()
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var buildConfig = require('./build.config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')
var { Map } = require('immutable')
var requireAll = require('require-all')
var fs = require('fs')
var colors = require('colors/safe')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

const configs = new Map(requireAll({
  dirname: path.resolve('config'),
  filter: /\.json$/i,
  recursive: false,
  map: (name, filePath) => path.basename(filePath, '.json'),
}))

console.log(colors.yellow('01.Generate config files'))

const distDir = path.resolve('dist-configs')
fs.mkdir(distDir, () => {
  configs.forEach((config, environment) => {
    const file = `${environment}.js`
    const fileDir = path.join(distDir, file)
    try {
      fs.writeFileSync(fileDir, `var __CLIENT_CONFIG__ = Object.freeze(${JSON.stringify(config)})`)
      console.log(colors.green(`  ${file} generated`))
    } catch (e) {
      console.log(colors.red(`  ${file} could not be generated`))
    }
  })

  console.log(colors.yellow('02.Build app'))

  var spinner = ora('building for production...')
  spinner.start()

  var assetsPath = path.join(buildConfig.build.assetsRoot, buildConfig.build.assetsSubDirectory)
  rm('-rf', assetsPath)
  mkdir('-p', assetsPath)
  cp('-R', 'static/*', assetsPath)

  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
  })
})


