
import {Http} from "@angular/http";
import {BaseService} from "./base.service";
import {Injectable} from "@angular/core";
import {CacheService} from "./cache.service";
import {myValidNull} from "../util/string-utils";
import {isUndefined} from "util";

/**
 * 平台账号 管理服务
 */
@Injectable()
export class PlatAccountService extends BaseService {

  constructor(http: Http,private cacheService:CacheService) {
    super(http)
  }
  baseUrl = "v1/platAccounts";

  /**
   * 获取 平台账号 列表
   *
   * @param page
   * @returns {Promise<any>}
   */
  pagination(page,keyword,platId): Promise<any> {
    let url = this.baseUrl + "/pagination";
    if (!myValidNull(keyword)) {
      page['_filter_like_accountLogin'] = keyword
    }
    if (!myValidNull(platId)) {
      page['_filter_eq_platId'] = platId
    }
    return this.post(url,page);
  }

  saveOrUpdateUser(user): Promise<any> {
    if(myValidNull(user.id)){
      return this.post(this.baseUrl,user);
    }else {
      return this.put(this.baseUrl+"/"+user.id,user);
    }
  }

  load(id): Promise<any> {
    return this.get(this.baseUrl+"/"+id);
  }

  deleteObj(ids): Promise<any> {
    return this.delete(this.baseUrl+"/",ids);
  }


}
