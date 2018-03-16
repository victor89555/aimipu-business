import { NgModule } from '@angular/core';
import { AccountRechargeComponent } from './account-recharge/account-recharge.component';
import { ConsumptionRecordComponent } from './consumption-record/consumption-record.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
  { path: 'account-recharge', component: AccountRechargeComponent},
  { path: 'consumption-record', component: ConsumptionRecordComponent}
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ],
  declarations: [AccountRechargeComponent, ConsumptionRecordComponent]
})
export class FinanceModule { }
