
import {Injectable} from "@angular/core";
import {Body, DELETE, Path, POST, PUT, RebirthHttp} from 'rebirth-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

/**
 * 服务
 */
@Injectable()
export class ShopService extends RebirthHttp{

  constructor(http: HttpClient) {
    super(http);
  }

  /**
   * 获取 列表
   *
   * @param page
   * @returns {Promise<any>}
   */
  @POST('api/merchant/shop/pagination')
  pagination(@Body page: any):Observable<any>{
      return null;
  }

  @POST('/api/merchant/shop')
  addShop(@Body entity: any): Observable<any>{
    return null
  }
  @PUT('/api/merchant/shop/:id')
  updateShop(@Path('id') id:number,@Body entity: any): Observable<any>{
    return null
  }


  @DELETE("/api/merchant/shop/:id")
  deleteObj(@Path('id') id:number): Observable<any>{
    return null
  }
}
