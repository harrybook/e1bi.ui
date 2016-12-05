import {UserManager} from 'oidc-client'

const protocal = window.location.protocol
const hostname = window.location.hostname
let port
if (window.location.port) {
  port = `:${window.location.port}`
} else {
  port = ''
}

const userManagerConfig = {
  client_id: process.env.SSO_ClientId,
  redirect_uri: `${protocal}//${hostname}${port}/callback`,
  response_type: 'token id_token',
  scope: 'openid email e1SystemAPI',
  authority: process.env.SSO_AuthorityUrl,
  silent_redirect_uri: `${protocal}//${hostname}${port}/callback`,
  automaticSilentRenew: false,
  filterProtocolClaims: true,
  loadUserInfo: true
}

const userMgr = new UserManager(userManagerConfig)
export default userMgr
