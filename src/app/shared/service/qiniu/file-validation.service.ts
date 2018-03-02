import {Injectable} from '@angular/core';
import {UploadFile} from '../../models/upload-file.model';
import {NzMessageService} from 'ng-zorro-antd';

@Injectable()
export class FileValidationService{
  constructor(private _message: NzMessageService){}

  /**
   * 验证文件大小
   */
  checkSize(uploadFiles: UploadFile[],maxSiz:number){
    let validUploadFiles: UploadFile[] = [];
    let errorFileName:any = "";
    for (let i = 0; i < uploadFiles.length; i++) {
      let uploadFile = uploadFiles[i];
      if (uploadFile.fileSize > maxSiz) {//验证大小
        errorFileName +=  uploadFile.fileName+"  ";
        continue;
      }else {
        validUploadFiles.push(uploadFile);
      }
    }
    if(errorFileName.length >0){
      this._message.create("error", "文件：【"+errorFileName+"】超过"+maxSiz+"M，请选择其他文件或压缩文件后再上传。");
    }
    return validUploadFiles;
  }
}
