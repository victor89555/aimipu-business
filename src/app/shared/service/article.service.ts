import {Http} from "@angular/http";
import {BaseService} from "./base.service";
import {Injectable} from "@angular/core";
import {CacheService} from "./cache.service";
import {myValidNull} from "../util/string-utils";

/**
 * 文章管理服务
 */
@Injectable()
export class ArticleService extends BaseService {

  constructor(http: Http,private cacheService:CacheService) {
    super(http)
  }
  baseUrl = "article";

  /**
   * 获取文章列表
   *
   * @param page
   * @returns {Promise<any>}
   */
  pagination(page,keyword,authorId,auditingStatus): Promise<any> {
    let url = this.baseUrl + "/pagination";
    if (!myValidNull(keyword)) {
      page['_filter_like_title'] = keyword
    }
    if (!myValidNull(authorId)) {
      page['_filter_eq_authorId'] = authorId
    }
    if (!myValidNull(auditingStatus)) {
      page['_filter_eq_auditingStatus'] = auditingStatus
    }
    return this.post(url,page);
  }
  /**
   * 获取投放与否文章列表
   *
   * @param page
   * @returns {Promise<any>}
   */
  adoptPagination(page,keyword,authorId,hasAdopt): Promise<any> {
    let url = this.baseUrl + "/adopt/pagination";
    if (!myValidNull(keyword)) {
      page['_filter_like_title'] = keyword
    }
    if (!myValidNull(authorId)) {
      page['_filter_eq_authorId'] = authorId
    }
    if (!myValidNull(hasAdopt)) {
      page['_filter_eq_hasAdopt'] = hasAdopt
    }
    return this.post(url,page);
  }
  saveOrUpdateUser(entity): Promise<any> {
      ///{id}/level1/{level1}/level2/{level2}
      return this.post(this.baseUrl+"/"+entity.id+"/level1/"+entity.typeId+"/level2/"+entity.secondTypeId,entity)

    // if(myValidNull(user.id)){
    //   return this.post(this.baseUrl,user);
    // }else {
    //   return this.put(this.baseUrl+"/"+user.id,user);
    // }
  }

  load(id): Promise<any> {
    return this.get(this.baseUrl+"/"+id);
  }

  deleteObj(ids): Promise<any> {
    return this.delete(this.baseUrl+"/",ids);
  }

  auditing(id,auditingEntity): Promise<any> {
    return this.put(this.baseUrl+"/"+id+"/audit",auditingEntity);
  }
  hasAdopt(id): Promise<any> {
    return this.put(this.baseUrl+"/"+id+"/hasAdopt",null);
  }
}
