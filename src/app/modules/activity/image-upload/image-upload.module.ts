import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';

import {ImgUploadComponent} from './img-upload/img-upload.component';
import {ImageService} from './img-upload/image.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [ImgUploadComponent],
  exports: [ImgUploadComponent]
})
export class ImageUploadModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ImgUploadComponent,
      providers: [ImageService]
    }
  }
}
