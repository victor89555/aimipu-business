import {Http} from "@angular/http";
import {BaseService} from "../base.service";
import {QiniuUploadToken} from "./qiniu-upload-token.model";

export abstract class UploadTokenService extends BaseService {

  constructor(http: Http) {
    super(http)
  }

  /**
   * 获取七牛Token
   * @returns
   */
  abstract getToken(photoInfoId, customerId, count): Promise<QiniuUploadToken[]>

}
