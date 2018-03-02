import { NgModule } from '@angular/core';
import {LoginComponent} from "./pages/login/login.component";
import {MyPaginationModule} from '../shared/my-pagination/my-pagination.module';
import {LoadingModule} from '../shared/loading/loading.module';
import {RouterModule} from '@angular/router';
import {SparklineDirective} from '../shared/directive/sparkline.directive';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    MyPaginationModule,
    LoadingModule,
  ],
  entryComponents: [
  ],
  declarations: [
    SparklineDirective,
    LoginComponent,
    SidebarComponent,
    HomeComponent,
  ],
  providers: [
  ]
})
export class ModulesModule { }
