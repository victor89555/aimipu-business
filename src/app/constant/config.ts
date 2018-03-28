import {environment} from "../../environments/environment";
function getDomain(domain: any){
  return domain.config.domain
}

// export const DOMAIN = getDomain(window)
export const DOMAIN = environment.serverDomain

export const APP_DOMAIN = environment.appDomain

export const QINIU_DOMAIN = environment.qiniuDomain


export const DOWNLOAD_DOMAIN = DOMAIN+"storage/";
export const UPLOAD_DOMAIN = DOMAIN+"api/upload";
