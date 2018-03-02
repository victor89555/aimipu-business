import {Http} from "@angular/http";
import {BaseService} from "./base.service";
import {Injectable} from "@angular/core";
import {CacheService} from "./cache.service";
import {myValidNull} from "../util/string-utils";
import {isUndefined} from "util";

/**
 * 文章主题管理服务
 */
@Injectable()
export class ArticleTypeService extends BaseService {

  constructor(http: Http,private cacheService:CacheService) {
    super(http)
  }
  baseUrl = "articleType";

  /**
   * 获取 文章主题 列表
   *
   * @param page
   * @returns {Promise<any>}
   */
  pagination(page,keyword,level,parentId): Promise<any> {
    let url = this.baseUrl + "/pagination";
    if (!myValidNull(keyword)) {
      page['_filter_like_name'] = keyword
    }
    if (!myValidNull(level)) {
      page['_filter_eq_level'] = level
    }
    if (!myValidNull(parentId)) {
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

  root(): Promise<any> {
    return this.get(this.baseUrl+"/root");
  }
  getTree(): Promise<any> {
    return this.get(this.baseUrl+"/tree");
  }


}
