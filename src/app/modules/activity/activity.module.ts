import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import {SharedModule} from '../../shared/shared.module';
import { TrialReportDetailsComponent } from './trial-report-details/trial-report-details.component';
import { TrialApplicationDetailsComponent } from './trial-application-details/trial-application-details.component';
import {ActivityManagementOverComponent} from './activity-management-over/activity-management-over.component';
import {ActivityManagementPublishedComponent} from './activity-management-published/activity-management-published.component';
import {ActivityManagementPendingComponent} from './activity-management-pending/activity-management-pending.component';
import { TrialApplicationListComponent } from './trial-application-list/trial-application-list.component';
import { TrialReportListComponent } from './trial-report-list/trial-report-list.component';
import { ActivityManagmentPassedComponent } from './activity-managment-passed/activity-managment-passed.component';
import { ActivityManagmentFailComponent } from './activity-managment-fail/activity-managment-fail.component';

const routes: Routes = [
  { path: 'activity-detail/:id', component: ActivityDetailComponent },
  { path: 'activity-published', component: ActivityManagementPublishedComponent },
  { path: 'activity-pending', component: ActivityManagementPendingComponent },
  { path: 'activity-over', component: ActivityManagementOverComponent },
  { path: 'activity-passed', component: ActivityManagmentPassedComponent },
  { path: 'activity-fail', component: ActivityManagmentFailComponent },
  { path: 'application-details/:id', component: TrialApplicationDetailsComponent},
  { path: 'report-details/:id', component: TrialReportDetailsComponent},
  { path: 'application-list', component: TrialApplicationListComponent},
  { path: 'report-list', component: TrialReportListComponent},
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
  declarations: [
    ActivityDetailComponent,
    ActivityManagementPublishedComponent,
    ActivityManagementPendingComponent,
    ActivityManagementOverComponent,
    TrialReportDetailsComponent,
    TrialApplicationDetailsComponent,
    TrialApplicationListComponent,
    TrialReportListComponent,
    ActivityManagmentPassedComponent,
    ActivityManagmentFailComponent
  ]
})

export class ActivityModule { }
