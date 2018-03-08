import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityManagementPublishedComponent } from './activity-management-published/activity-management-published.component';
import { ActivityManagementPendingComponent } from './activity-management-pending/activity-management-pending.component';
import { ActivityManagementOverComponent } from './activity-management-over/activity-management-over.component';
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    ActivityManagementPublishedComponent,
    ActivityManagementPendingComponent,
    ActivityManagementOverComponent
  ],
  declarations: [
    ActivityManagementPublishedComponent,
    ActivityManagementPendingComponent,
    ActivityManagementOverComponent
  ]
})
export class ActivityManagementModule { }
