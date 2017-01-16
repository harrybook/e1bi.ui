import { UserManager } from 'oidc-client'

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
  loadUserInfo: true,
  post_logout_redirect_uri:`${protocal}//${hostname}${port}`
}

const userMgr = new UserManager(userManagerConfig)

export function refresh_ssrs(token) {
  let url = process.env.SSRSServer + '/reportserver/logon.aspx?token=@@&clientId=e1bi'.replace('@@', token)

  let iframe = document.createElement('iframe')
  iframe.frameborder = "0"
  iframe.allowtransparency = "true"
  iframe.marginheight = "0" 
  iframe.marginwidth = "0"
  iframe.style.width = '0px'
  iframe.style.height = '0px'
  document.body.appendChild(iframe);
  iframe.src = url
  iframe.onload = function (){
    iframe.src = process.env.SSRSServer + '/reports/report/Source/DummyReport?rs:embed=true'
    iframe.onload = function (){
    }
  }
}

export default userMgr