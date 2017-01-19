import { Map } from 'immutable'

let hostname = window.location.hostname
let cc = __CLIENT_CONFIG__
let config = hostname.indexOf('ef.cn') > -1 ? cc.CN : cc.COM
export default Map(config)
