import {Http} from "@angular/http";
import {BaseService} from "./base.service";
import {Injectable} from "@angular/core";
import {CacheService} from "./cache.service";
import {myValidNull} from "../util/string-utils";

/**
 * 文章管理服务
 */
@Injectable()
export class ArticleAdoptsService extends BaseService {

  constructor(http: Http,private cacheService:CacheService) {
    super(http)
  }
  baseUrl = "articleAdopts";


  saveAdopts(adopts:any[]): Promise<any> {
    return this.post(this.baseUrl+"/multiple",adopts);
  }

  load(id): Promise<any> {
    return this.get(this.baseUrl+"/article/"+id);
  }



}
