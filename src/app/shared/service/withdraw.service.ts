import {Http} from "@angular/http";
import {BaseService} from "./base.service";
import {Injectable} from "@angular/core";
import {CacheService} from "./cache.service";
import {myValidNull} from "../util/string-utils";

/**
 * 创作人员管理服务
 */
@Injectable()
export class WithdrawService extends BaseService {

  constructor(http: Http,private cacheService:CacheService) {
    super(http)
  }
  baseUrl = "v1/sysCustomerWithdraws";

  /**
   * 获取 创作人员列表
   *
   * @param page
   * @returns {Promise<any>}
   */
  pagination(page,keyword): Promise<any> {
    let url = this.baseUrl + "/pagination";
    if (!myValidNull(keyword)) {
      page['_filter_like_keyword'] = keyword
    }
    return this.post(url,page);
  }

  auditPresent(id,status): Promise<any> {
    return this.get(this.baseUrl+"/"+id+"/status/"+status);
  }

}
