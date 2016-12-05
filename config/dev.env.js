var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SSO_ClientId:'"e1bi"',
  SSO_AuthorityUrl:'"https://e1bi-stage.ef.com/ids"',
  ApiBase: '"https://e1bi-stage.ef.com/api"'
})
