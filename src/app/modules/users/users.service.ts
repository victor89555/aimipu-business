import {Injectable} from "@angular/core";
import {BaseUrl, POST, RebirthHttp} from 'rebirth-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {User} from './user.model';

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
}