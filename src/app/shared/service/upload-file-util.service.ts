
import {Injectable} from "@angular/core";
import {Headers, Response, Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {DOMAIN, UPLOAD_DOMAIN} from '../../constant/config';
import {myValidNull} from '../util/string-utils';
/**
 * 上传下载服务工具
 */
@Injectable()
export class UploadFileUtilService {
  private http: Http;
  constructor(http: Http) {
    this.http = http;
  }

  uploadDomain=UPLOAD_DOMAIN;


  /**
   * 上传文件
   *
   * @param {File} file
   * @returns {Promise<any>}
   */
  uploadFile(file:File,type?:any): Promise<any> {
    let formData = new FormData();
    formData.append("file", file);
    let header = getRequestHeader();
    let options:any = {headers: header, withCredentials: true};
    let url = this.uploadDomain;
    if(myValidNull(type)&&type == 2){
      url = DOMAIN+"fileUpload/uploadNewsImg";
    }
    return this.http.post(url, formData,options)
      .toPromise()
      .then((res: Response) => {
      if(res["_body"]==""){
        return res
      }else {
        let body = res.json()
        return body || {}
      }
    })
      .catch(this.handleError)
  }
  private handleError(error: Response | any) {
    let ua = navigator.userAgent.toLowerCase();
    let isWeixin = ua.indexOf("micromessenger") >= 0;
    if (error.status == 403 || (error.status == 419 && isWeixin)) {
      // window.location.href = "#/forbidden"
      // return Promise.resolve("Sorry,You don't have permission.");
    }
    if (error.status == 401 && !isWeixin) {
      //未登录，先登录
      window.location.href = "#/login";
      //return Promise.resolve("Please sweep the qr code.");
    }
    // let errMsg = (error.message) ? error.message :
    //   error.status ? `${error.status} - ${error.statusText}` : 'Server error'
    return Promise.reject(error);
  }
}
export function getRequestHeader(): any {
  let headers = new Headers()
  headers.append('X-Requested-With', 'XMLHttpRequest');
  headers.append('Accept', 'application/json');
  return headers;
}
