import {Http} from "@angular/http";
import {BaseService} from "./base.service";
import {Injectable} from "@angular/core";
import {CacheService} from "./cache.service";

/**
 *登录服务
 */
@Injectable()
export class LoginService extends BaseService {

  constructor(http: Http,private cacheService:CacheService) {
    super(http)
  }

  /**
   * 登录
   *
   * @param user
   * @returns {Promise<any>}
   */
  login(user): Promise<any> {
    let url = "v1/login"
    let resultPromise = this.post(url,user);
    resultPromise.then((data)=>{
      this.cacheService.setCurrUserInfo(data.data)
    })
    return resultPromise
  }

  logout():Promise<any> {
    let url = "v1/logout"
    return this.delete(url,null)
  }


}
