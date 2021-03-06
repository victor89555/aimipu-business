import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ModalHelper} from './modal.helper';
import {TransformModule} from './pipe/transform.module';
import {DirectiveModule} from './directive/directive.module';
import {HttpClientModule} from '@angular/common/http';
import { MyEditorComponent } from './my-editor/my-editor.component';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {ImageUploadComponent} from '../modules/activity/image-upload/image-upload.component';
import {RebirthPermissionModule} from 'rebirth-permission';
import {UploadQiniuComponent} from './upload-qiniu/upload-qiniu.component';
import {CustomerInfoComponent} from '../modules/activity/customer-info/customer-info.component';
import {TrialReportDetailCComponent} from '../modules/activity/trial-report-detail-c/trial-report-detail-c.component';
import { PicViewerComponent } from './pic-viewer/pic-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TransformModule,
    DirectiveModule,
    NgZorroAntdModule.forRoot(),
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    RebirthPermissionModule,
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TransformModule,
    DirectiveModule,
    NgZorroAntdModule,
    MyEditorComponent,
    FroalaEditorModule,
    FroalaViewModule,
    ImageUploadComponent,
    RebirthPermissionModule,
    UploadQiniuComponent,
    CustomerInfoComponent,
    TrialReportDetailCComponent,
    PicViewerComponent
  ],
  entryComponents:[CustomerInfoComponent, TrialReportDetailCComponent],
  declarations: [MyEditorComponent,ImageUploadComponent,UploadQiniuComponent,CustomerInfoComponent, TrialReportDetailCComponent, PicViewerComponent],
  providers:[
    ModalHelper
  ]
})
export class SharedModule { }
