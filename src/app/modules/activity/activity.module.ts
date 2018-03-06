import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import {SharedModule} from '../../shared/shared.module';
import { ActivityManagementComponent } from './activity-management/activity-management.component';
import { ActivityManagementPublishedComponent } from './activity-management-published/activity-management-published.component';
import { ActivityManagementPendingComponent } from './activity-management-pending/activity-management-pending.component';
import { ActivityManagementOverComponent } from './activity-management-over/activity-management-over.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

const routes: Routes = [
  { path: 'activity-detail', component: ActivityDetailComponent },
  { path: 'activity-management', component: ActivityManagementComponent },
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
  declarations: [ActivityDetailComponent, ActivityManagementComponent, ActivityManagementPublishedComponent, ActivityManagementPendingComponent, ActivityManagementOverComponent, ImageUploadComponent]
})
export class ActivityModule { }
