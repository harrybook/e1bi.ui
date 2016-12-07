var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SSO_ClientId:'"e1bi"',
  SSO_AuthorityUrl:'"http://e1bi-dev.ef.com/ids"',
  ApiBase: '"http://e1bi-dev.ef.com/api"'
})
