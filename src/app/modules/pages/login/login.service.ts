import {Injectable} from "@angular/core";
import { Body, POST, RebirthHttp} from 'rebirth-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class LoginService extends RebirthHttp {

  constructor(http: HttpClient) {
    super(http)
  }

  @POST('/api/merchant/login')
  login(@Body user): Observable<any> {
    return null
  }

  @POST('/api/merchant/logout')
  logout(): Observable<any> {
    return null
  }


}
