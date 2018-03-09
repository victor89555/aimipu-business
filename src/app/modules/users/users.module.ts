import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserInfoComponent} from './user-info/user-info.component';
import {SharedModule} from '../../shared/shared.module';
import {ResetPasswordComponent} from './user-info/reset-password.component';

const routes: Routes = [
  { path: 'user-info', component: UserInfoComponent },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ],
  entryComponents:[],
  declarations: [ UserInfoComponent, ResetPasswordComponent]
})
export class UsersModule { }
