import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import {SharedModule} from '../../shared/shared.module';
import { ActivityManagementComponent } from './activity-management/activity-management.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { TrialReportDetailsComponent } from './trial-report-details/trial-report-details.component';
import { TrialApplicationDetailsComponent } from './trial-application-details/trial-application-details.component';
import {ActivityManagementModule} from './activity-management/activity-management.module';
import {TrialReportDetailsModule} from './trial-report-details/trial-report-details.module';

const routes: Routes = [
  { path: 'activity-detail', component: ActivityDetailComponent },
  { path: 'activity-management', component: ActivityManagementComponent },
  { path: 'application-details', component: TrialApplicationDetailsComponent},
  { path: 'report-details', component: TrialReportDetailsComponent},
];

@NgModule({
  imports: [
    SharedModule,
    ActivityManagementModule,
    TrialReportDetailsModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ],
  entryComponents:[],
  declarations: [
    ActivityDetailComponent,
    ActivityManagementComponent,
    ImageUploadComponent,
    TrialReportDetailsComponent,
    TrialApplicationDetailsComponent
  ]
})
export class ActivityModule { }
