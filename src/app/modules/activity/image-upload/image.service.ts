import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {POST, RebirthHttp} from 'rebirth-http';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ImageService extends RebirthHttp{
  constructor(http: HttpClient) {
    super(http)
  }

  @POST('fileUpload/uploadNewsImg')
  postImg(image: File): Observable<any>{
    return null
  }
}
