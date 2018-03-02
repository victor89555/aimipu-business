/**
 * Created by zoushuiyun on 2017/4/24.
 */

import {MyPaginationComponent} from "./my-pagination.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [MyPaginationComponent],
  declarations: [
    MyPaginationComponent,
  ],
  entryComponents: [
    MyPaginationComponent,
  ]
})
export class MyPaginationModule {
}
