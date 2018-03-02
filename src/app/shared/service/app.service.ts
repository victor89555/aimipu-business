import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {BaseService} from "./base.service";
import {QiniuUploadToken} from "./qiniu/qiniu-upload-token.model";

@Injectable()
export class AppService extends BaseService {

  constructor(http: Http) {
    super(http)
  }

  /**
   * 获取首页统计数据
   *
   * @returns {Promise<any>}
   */
  getStaticsCount():Promise<any>{
    return this.get(`app/staticsCount`)
  }

  changBarDatas(type):Promise<any>{
    return this.get(`app/${type}/changBarDatas`)
  }

  /**
   * 获取七牛Token
   *
   * @param customerId
   * @returns {Promise<QiniuUploadToken>}
   */
  getToken(count): Promise<QiniuUploadToken> {
    return this.get(`v1/photo/uptoken?genNum=${count}`)
  }


}
