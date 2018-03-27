import { Injectable } from '@angular/core';
import { GET, RebirthHttp} from 'rebirth-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ActivityDetailService extends RebirthHttp{

  constructor(http: HttpClient) {
    super(http);
  }

  //获取商户店铺列表
  @GET('/api/merchant/shop')
  getShops():Observable<any>{
    return null
  }

}
