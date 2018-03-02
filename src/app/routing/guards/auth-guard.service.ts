/**
 * Created by zoushuiyun on 2017/7/25.
 */
import {Injectable} from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import {myValidNull} from '../../shared/util/string-utils';
import {CacheService} from '../../shared/service/cache.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private cacheService: CacheService,  private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  /**
   * 验证是否登录 有用户相关缓存信息，否则跳转至登录页
   *
   * @param url
   * @returns {boolean}
   */
  checkLogin(url: string): boolean {
    let userInfo: any = this.cacheService.getCurrUserInfo();
    //登录 B 端
    if (!myValidNull(userInfo) && !myValidNull(userInfo.id)) {
      return true;
    }
    // Navigate to the login page with extras
    console.info('未登录，或缓存过期，重新登录====》login');
    this.router.navigate(['/login']);
    return false;
  }

}
