import {Http} from "@angular/http";
import {BaseService} from "./base.service";
import {Injectable} from "@angular/core";
import {CacheService} from "./cache.service";
import {myValidNull} from "../util/string-utils";
import {isUndefined} from "util";

/**
 * 帮助类别管理服务
 */
@Injectable()
export class HelpTypeService extends BaseService {

  constructor(http: Http,private cacheService:CacheService) {
    super(http)
  }
  baseUrl = "helpType";

  /**
   * 获取 帮助类别 列表
   *
   * @param page
   * @returns {Promise<any>}
   */
  pagination(page,keyword): Promise<any> {
    let url = this.baseUrl + "/pagination";
    if (!myValidNull(keyword)) {
      page['_filter_like_name'] = keyword
    }
    return this.post(url,page);
  }
  getAll(): Promise<any> {
    let url = this.baseUrl;
    return this.get(url);
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
