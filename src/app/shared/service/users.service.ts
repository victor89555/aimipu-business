import {Http} from "@angular/http";
import {BaseService} from "./base.service";
import {Injectable} from "@angular/core";
import {CacheService} from "./cache.service";
import {myValidNull} from "../util/string-utils";
import {isUndefined} from "util";

/**
 * 账号(用户)管理服务
 */
@Injectable()
export class UsersService extends BaseService {

  constructor(http: Http,private cacheService:CacheService) {
    super(http)
  }
  baseUrl = "sysUser";

  /**
   * 获取用户账号列表
   *
   * @param page
   * @returns {Promise<any>}
   */
  pagination(page,keyword,parentId,role): Promise<any> {
    let url = this.baseUrl + "/pagination"+(role==2?3:2);
    if (!myValidNull(keyword)) {
      page['_filter_like_keyword'] = keyword
    }
    // if (!isUndefined(status)) {
      page['_filter_eq_status'] = 1;
    // }
    if (!isUndefined(parentId)) {
      page['_filter_eq_parentId'] = parentId
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

  /**
   * 当前用户修改密码
   * @param id
   * @returns {Promise<any>}
   */
  modifyPassword(password): Promise<any> {
    let url = this.baseUrl+"/modify_password";
    return this.put(url,password)
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

  queryByRole(roleId): Promise<any> {
    return this.get(this.baseUrl+"/role-"+roleId);
  }
  queryByParentId(parentId): Promise<any> {
    return this.get(this.baseUrl+"/parent-"+parentId);
  }
}
