/**
 * Created by zoushuiyun on 2017/8/29.
 */

import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {LoadingComponent} from "./loading.component";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [LoadingComponent],
  declarations: [
    LoadingComponent,
  ],
  entryComponents: [
    LoadingComponent,
  ]
})
export class LoadingModule {
}
