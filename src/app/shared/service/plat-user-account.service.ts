
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
export class PlatUserAccountService extends BaseService {

  constructor(http: Http,private cacheService:CacheService) {
    super(http)
  }
  baseUrl = "userAccount";



  getPlats(): Promise<any> {
    return this.get(this.baseUrl+"/plats");
  }



}
