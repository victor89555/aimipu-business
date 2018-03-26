import {Http} from "@angular/http";
import {BaseService} from "./base.service";
import {Injectable} from "@angular/core";
import {CacheService} from "./cache.service";

/**
 *登录服务
 */
@Injectable()
export class LoginService extends BaseService {

  constructor(http: Http,cacheService:CacheService) {
    super(http,cacheService)
  }

  /**
   * 登录
   *
   * @param user
   * @returns {Promise<any>}
   */
  login(user): Promise<any> {
    let url = "/api/merchant/login"
    return  this.post(url,user);
  }

  logout():Promise<any> {
    let url = "/api/merchant/logout"
    return this.post(url,null)
  }


}
