import {Http} from "@angular/http";
import {BaseService} from "./base.service";
import {Injectable} from "@angular/core";
import {CacheService} from "./cache.service";
import {myValidNull} from "../util/string-utils";

/**
 * 创作人员管理服务
 */
@Injectable()
export class CustomerService extends BaseService {

  constructor(http: Http,private cacheService:CacheService) {
    super(http)
  }
  baseUrl = "v1/customers";

  /**
   * 获取 创作人员列表
   *
   * @param page
   * @returns {Promise<any>}
   */
  pagination(page,keyword,sysUserId): Promise<any> {
    let url = this.baseUrl + "/pagination";
    if (!myValidNull(keyword)) {
      page['_filter_like_keyword'] = keyword
    }
    if (!myValidNull(sysUserId)) {
      page['_filter_eq_sysUserId'] = sysUserId
    }
    return this.post(url,page);
  }
  /**
   * 获取 未绑定创作人员列表
   *
   * @param page
   * @returns {Promise<any>}
   */
  unbindPagination(page,keyword): Promise<any> {
    let url = this.baseUrl + "/unbind_pagination";
    if (!myValidNull(keyword)) {
      page['_filter_like_keyword'] = keyword
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

  bind(id,sysUserId){
    return this.post(this.baseUrl+"/"+id+"/bind/"+sysUserId,null);
  }
  unBind(id,sysUserId){
    return this.post(this.baseUrl+"/"+id+"/unbind/"+sysUserId,null);
  }

  /**
   * 管理员重置密码
   *
   * @param id
   * @returns {Promise<any>}
   */
  resetPassword(id): Promise<any> {
    let url = this.baseUrl+"/"+id+"/reset_password";
    return this.put(url)
  }
}
