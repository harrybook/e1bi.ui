import { UserManager } from 'oidc-client'
import config from '../../config'

const protocal = window.location.protocol
const hostname = window.location.hostname
let port
if (window.location.port) {
  port = `:${window.location.port}`
} else {
  port = ''
}

const userManagerConfig = {
  client_id: config.get('SSO_ClientId'),
  redirect_uri: `${protocal}//${hostname}${port}/callback`,
  response_type: 'token id_token',
  scope: 'openid email e1SystemAPI',
  authority: config.get('SSO_AuthorityUrl'),
  silent_redirect_uri: `${protocal}//${hostname}${port}/callback`,
  automaticSilentRenew: false,
  filterProtocolClaims: true,
  loadUserInfo: true,
  post_logout_redirect_uri:`${protocal}//${hostname}${port}`
}

const userMgr = new UserManager(userManagerConfig)

export function refresh_ssrs(token, callback) {
  let ssrsserver = config.get('SSRSServer')
  let url = ssrsserver + '/reportserver/logon.aspx?token=@@&clientId=e1bi'.replace('@@', token)

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
    if(callback){
      callback()
    }
    iframe.src = ssrsserver + '/reports/report/Source/DummyReport?rs:embed=true'
    iframe.onload = function (){
    }
  }
}

export default userMgr