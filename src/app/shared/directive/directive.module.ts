/**
 * Created by zoushuiyun on 2017/3/20.
 */
import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import {MyMinLengthDirective} from "./my-min-length.directive";
import {MobileValidateDirective} from "./mobile-validate.directive";
import {FileDropDirective} from '../../modules/activity/image-upload/file-drop.directive';
@NgModule({
  imports:[
    CommonModule,
    FormsModule
  ],
  declarations: [
    MyMinLengthDirective,
    MobileValidateDirective,
    FileDropDirective
  ],
  exports:[
    MyMinLengthDirective,
    MobileValidateDirective,
    FileDropDirective
  ]
})
export class DirectiveModule { }
