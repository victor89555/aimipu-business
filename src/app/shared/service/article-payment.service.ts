import {Http} from "@angular/http";
import {BaseService} from "./base.service";
import {Injectable} from "@angular/core";
import {CacheService} from "./cache.service";
import {myValidNull} from "../util/string-utils";

/**
 * 文章管理服务
 */
@Injectable()
export class ArticlePaymentService extends BaseService {

  constructor(http: Http,private cacheService:CacheService) {
    super(http)
  }
  baseUrl = "v1/articles";

  pagination(page,keyword,type,status): Promise<any> {
    let url = this.baseUrl + "/payments/pagination";
    if (!myValidNull(keyword)) {
      page['_filter_like_title'] = keyword
    }
    if (!myValidNull(type)) {
      page['_filter_eq_type'] = type
    }
    if (!myValidNull(status)) {
      page['_filter_eq_status'] = status
    }
    return this.post(url,page);
  }

  applyBonus(id,amount): Promise<any> {
    return this.get(this.baseUrl+"/"+id+"/payment/"+amount);
  }
  auditing(id,auditingEntity): Promise<any> {
    return this.post(this.baseUrl+"/payment/"+id+"/audit",auditingEntity);
  }



}
