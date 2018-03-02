/**
 * Created by zoushuiyun on 2017/4/6.
 *
 * desc:管道模块
 */
import { NgModule }            from '@angular/core';
import {
  UserStatusPipe, YesNoPipe,
  StringCutPipe, SelectedPipe, SexPipe, UserGroupPipe, DicsNamePipe, stringEllipsisCutPipe, FilterPipe
} from './transform.pipe';
@NgModule({
  imports:[
  ],
  declarations: [
    UserStatusPipe,
    SexPipe,
    YesNoPipe,
    StringCutPipe,
    FilterPipe,
    stringEllipsisCutPipe,
    SelectedPipe,
    UserGroupPipe,
    DicsNamePipe,
  ],
  exports:[
    UserStatusPipe,
    SexPipe,
    YesNoPipe,
    StringCutPipe,FilterPipe,
    stringEllipsisCutPipe,
    SelectedPipe,
    UserGroupPipe,
    DicsNamePipe,
  ]
})
export class TransformModule { }
