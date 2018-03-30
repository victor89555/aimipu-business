import {Injectable} from "@angular/core";
import {BaseUrl, Body, GET, Path, POST, PUT, RebirthHttp} from 'rebirth-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {User} from './user.model';
import {ActivityInfo} from '../activity/activity-detail/activity-detail.model';

/**
 * 账号(用户)管理服务
 */
@Injectable()
@BaseUrl(environment.serverDomain)
export class UsersService extends RebirthHttp {

  constructor(http: HttpClient) {
    super(http)
  }

  @POST('/api/merchant/me')
  loadUserInfo(): Observable<User>{
    return null
  }
  @POST('/api/merchant/update')
  updateUserInfo(@Body user: any): Observable<any>{
    return null
  }
  @POST('/api/merchant/reset')
  resetPwd(@Body user: any): Observable<any>{
    return null
  }




  /*-----------------------------customerinfo---------------*/
  //获取c端用户信息
  @GET('/api/merchant/user/:id')
  getCustomerInfo(@Path('id') id:number):Observable<any>{
    return null
  }
  //修改试用信息
  @PUT('/api/merchant/userCount')
  getCustomerCount(@Body param: any):Observable<any>{
    return null
  }
}
