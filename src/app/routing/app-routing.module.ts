/**
 * Created by zoushuiyun on 2017/5/31.
 */
import {RouterModule, Routes} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {NgModule} from "@angular/core";
import {AuthGuard} from "./guards/auth-guard.service";
import {LoginComponent} from '../modules/pages/login/login.component';
import {SidebarComponent} from '../modules/pages/sidebar/sidebar.component';
import {HomeComponent} from '../modules/pages/home/home.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'auth-guard',
    component: SidebarComponent,
    canActivate:[AuthGuard],
    children: [//需 登录 才可访问的菜单放到此子路由下
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'users',
        loadChildren: 'app/modules/users/users.module#UsersModule',
      },
      {
        path: 'activity',
        loadChildren: 'app/modules/activity/activity.module#ActivityModule',
      },
      {
        path: 'finance',
        loadChildren: 'app/modules/finance/finance.module#FinanceModule',
      },
      {
        path: 'report',
        loadChildren: 'app/modules/report/report.module#ReportModule',
      },
    ]
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes),
    RouterModule.forChild([])
  ],
  exports:[RouterModule],
  providers:[
    AuthGuard,
    {
      provide:LocationStrategy,// 导航路径的策略设置
      useClass: HashLocationStrategy // 使用'#'方式的策略
    }
  ]
})

export class AppRoutingModule{

}
