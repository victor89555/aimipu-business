
import {Injectable} from "@angular/core";
import {Body, POST, RebirthHttp} from 'rebirth-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

/**
 * 服务
 */
@Injectable()
export class FinanceService extends RebirthHttp{

  constructor(http: HttpClient) {
    super(http);
  }

  /**
   * 获取 列表
   *
   * @param page
   * @returns {Promise<any>}
   */
  @POST('api/merchant/m_glods/pagination')
  pagination(@Body page: any):Observable<any>{
      return null;
  }

}
