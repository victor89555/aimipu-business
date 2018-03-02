import {Http} from "@angular/http";
import {BaseService} from "./base.service";
import {Injectable} from "@angular/core";
import {CacheService} from "./cache.service";

/**
 * 字典服务 系统参数设置服务
 */
@Injectable()
export class DicsService extends BaseService {

  constructor(http: Http,private cacheService:CacheService) {
    super(http)
  }

  baseUrl = "dics";

  /**
   * 获取字典数组
   *
   * @param dicType dicType参考`com.yunqian.furniture.system.constant.DicType`
   * @returns {Promise<any>}
   */
  getDics(dicType): Promise<any> {
    let url = this.baseUrl + "/"+dicType;
    return this.get(url);
  }

  loadSysConfigByCode(code): Promise<any> {
    let url = "sys_configs/"+code;
    return this.get(url);
  }

  updateSysConfig(config): Promise<any> {
    let url = "sys_configs/"+config.id;
    return this.put(url,config);
  }

}
