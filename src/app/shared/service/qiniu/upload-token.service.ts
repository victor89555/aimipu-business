import {Http} from "@angular/http";
import {BaseService} from "../base.service";
import {QiniuUploadToken} from "./qiniu-upload-token.model";
import {CacheService} from '../cache.service';

export abstract class UploadTokenService extends BaseService {

  constructor(http: Http,cacheService:CacheService) {
    super(http,cacheService)
  }

  /**
   * 获取七牛Token
   * @returns
   */
  abstract getToken(photoInfoId, customerId, count): Promise<QiniuUploadToken[]>

}
