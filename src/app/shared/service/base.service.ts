import {Headers, Response, Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {DOMAIN} from "../../constant/config";

export class BaseService {

  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  private getRequestOptions(): any {
    let headers = new Headers()

    headers.append('X-Requested-With', 'XMLHttpRequest')
    headers.append('Content-Type', 'application/json; charset=UTF-8')
    headers.append('Accept', 'application/json')

    return {headers: headers, withCredentials: true}
  }

  /**
   * get请求
   * @param url
   * @returns {Promise<T>|Promise<TResult|T>|Observable<R>|Promise<R>|any}
   */
  get(url): Promise<any> {
    let options = this.getRequestOptions()
    return this.http.get(DOMAIN + url, options)
      .toPromise()
      .then((res: any) => {

        if (!res._body) {
          return {}
        }

        let body = res.json()
        return body || {}
      })
      .catch(this.handleError)
  }


  /**
   * post请求
   * @param url
   * @param body
   * @returns {Promise<T>|Promise<TResult|T>|Observable<R>|Promise<R>|any}
   */
  post(url, body): Promise<any> {
    let options = this.getRequestOptions()
    return this.http.post(DOMAIN + url, body, options)
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

  /**
   * delete请求
   * @param url
   * @param ids
   * @returns {Promise<*|{}>|Promise<T>|Promise<*|{}|T>|any<T>|Promise<R>|any}
   */
  delete(url, ids): Promise<any> {
    let options = this.getRequestOptions()
    let deleteUrl = DOMAIN + url
    if (ids) {
      deleteUrl += ids
    }

    return this.http.delete(deleteUrl, options)
      .toPromise()
      .then((res: Response) => {

        if (res.status.toString().startsWith('2')) {
          // let body = res.json()
          // return body || {}
          return {}
        }

      })
      .catch((error: any) => {
        let body = error.json()
        return body || {}
      }).catch(this.handleError)
  }

  /**
   * put请求
   * @param url
   * @param body
   * @returns {Promise<T>|Promise<TResult|T>|Observable<R>|Promise<R>|any}
   */
  put(url, body?): Promise<any> {
    let options = this.getRequestOptions()
    return this.http.put(DOMAIN + url, body, options)
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
    if (error.status == 419 && !isWeixin) {
      //未登录，先登录
      window.location.href = "#/login";
      //return Promise.resolve("Please sweep the qr code.");
    }
    // let errMsg = (error.message) ? error.message :
    //   error.status ? `${error.status} - ${error.statusText}` : 'Server error'
    return Promise.reject(error);
  }
}

