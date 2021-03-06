import { Component } from '@angular/core';
import {environment} from '../environments/environment';
import {RebirthHttpProvider} from 'rebirth-http';
import {AuthorizationService} from 'rebirth-permission';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/do';
import {NzMessageService} from 'ng-zorro-antd';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(private rebirthHttpProvider: RebirthHttpProvider,
              private authorizationService: AuthorizationService,
              private router: Router,
              private messageService: NzMessageService) {
    this.applicationSetup();
  }

  private applicationSetup() {
    this.apiSetup();
  }

  private apiSetup() {
    this.rebirthHttpProvider
      .baseUrl(environment.serverDomain)
      .addInterceptor({
        request: () => {
          // this.loadingService.show();
        },
        response: () => {
          // this.loadingService.hide();
        }
      })
      .addInterceptor({
        request: (request) => {
          return request.clone({
            setHeaders: {
              "X-Requested-With": "XMLHttpRequest",
              // "Content-Type": "application/json"
            }
          });
        }
      })
      .addInterceptor({
        request: (request) => {
          const appInfo = this.authorizationService.getCurrentUser()
          if (appInfo) {
            return request.clone({
              setHeaders: {
                Authorization: `${appInfo.token_type } ${appInfo.access_token }`
              }
            });
          }
        }
      })
      .addResponseErrorInterceptor((res: HttpErrorResponse) => {
        if ([401, 0].includes(res.status)) {
          this.router.navigateByUrl('/login');
        }
        if ([400].indexOf(res.status) !== -1) {
          console.log(res.error.msg)
          this.messageService.error(res.error.msg || "Error！")
        }
      });
  }
}
