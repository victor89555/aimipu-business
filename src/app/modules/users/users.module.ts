import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserInfoComponent} from './user-info/user-info.component';
import {SharedModule} from '../../shared/shared.module';
import { AccountSecurityComponent } from './account-security/account-security.component';
import { ShopManagementComponent } from './shop-management/shop-management.component';
import { EditShopComponent } from './shop-management/edit-shop/edit-shop.component';

const routes: Routes = [
  { path: 'user-info', component: UserInfoComponent },
  { path: 'account-security', component: AccountSecurityComponent},
  { path: 'shop-ma', component: ShopManagementComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ],
  entryComponents:[EditShopComponent],
  declarations: [ UserInfoComponent, AccountSecurityComponent, ShopManagementComponent, EditShopComponent]
})
export class UsersModule { }
