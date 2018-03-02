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
export class UserArticleTypeService extends BaseService {

  constructor(http: Http,private cacheService:CacheService) {
    super(http)
  }
  baseUrl = "v1";


  load(id): Promise<any> {
    return this.get(this.baseUrl+"/users/"+id+"/article_types");
  }

  /**
   * @param id
   * @returns {Promise<any>}
   */
  updateRelate(listVo:any): Promise<any> {
    let url = this.baseUrl+"/users/"+listVo.userId+"/article_types";
    return this.put(url,listVo)
  }

  setPeriod(entity): Promise<any> {
    let url = this.baseUrl+"/article_types/"+entity.uat_id+"/period?beginTime="+entity.beginTime+"&endTime="+entity.endTime;
    return this.post(url,entity)
  }
}
