import { Injectable } from '@angular/core';
import {GET, RebirthHttp} from 'rebirth-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HomeService extends RebirthHttp  {

  constructor(http: HttpClient) {
    super(http)
  }

  //获取首页统计信息
  @GET('/api/merchant/countInfo')
  getCountInfo(): Observable<any> {
    return null
  }
}
