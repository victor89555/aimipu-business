import {Injectable} from "@angular/core";
import {Subject, Observable} from "rxjs";
import {QiniuUploadFile} from "./qiniu-upload-file.model";
import {UploadService} from "../upload.service";
import {UploadFile} from "../../models/upload-file.model";
import {UploadResult} from "../../models/upload-result.model";
import {LoggerService} from "../logger.service";
@Injectable()
export class QiniuUploadService extends UploadService {
  public errorUploadFiles: UploadFile[] = []

  constructor(private logger: LoggerService) {
    super()
  }

  upload(qiniuUploadFile: QiniuUploadFile): Observable<UploadResult> {
    let $this = this;
    let resultSubject = new Subject<UploadResult>();
    //请求七牛上传接口
    let xhr = new XMLHttpRequest()
    xhr.open('post', 'http://up-z0.qiniu.com', true)
    // 显示进度
    let uploadResult = new UploadResult(qiniuUploadFile);
    let uploaded: number = 0
    let temp: number = -1
    if (xhr.upload) {
      xhr.upload.onprogress = function (e) {
        uploaded = e.loaded * 100 / qiniuUploadFile.file.size
        $this.logger.debug("e.loaded:" + e.loaded + " filesize:" + qiniuUploadFile.file.size + " progress:" + uploaded)
        if (temp !== uploaded) {
          let progress = parseInt(uploaded.toString());
          if (progress > 100) {
            progress = 100
          }
          uploadResult.progress = progress
          $this.logger.debug("progress upto:" + progress)
          temp = uploaded
          resultSubject.next(uploadResult)
        }
      }
    }
    //生成图片上传的key
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          qiniuUploadFile.fileKey = qiniuUploadFile.uploadToken.key
          $this.logger.debug("upload success call subject complete")
          resultSubject.complete()
        } else {
          $this.logger.debug("upload fail call subject error")
          uploadResult.setResult(false, xhr.statusText)
          resultSubject.error(uploadResult)
        }
      }
    }

    //构造Formdata上传信息
    var formData = new FormData()
    formData.append('name', qiniuUploadFile.fileName)
    formData.append('key', qiniuUploadFile.uploadToken.key)
    formData.append('token', qiniuUploadFile.uploadToken.token)
    formData.append('file', qiniuUploadFile.file)
    //执行发送
    xhr.send(formData)
    return resultSubject
  }


  /**
   * 过滤不符合条件的文件
   * @param uploadFiles
   * @param maxSiz
   * @returns {UploadFile[]}
   */
  fileFilter(uploadFiles: UploadFile[],maxSiz:number){
    let uploadFilesTemp: UploadFile[] = []
    for (let i = 0; i < uploadFiles.length; i++) {
      let uploadFile = uploadFiles[i];
      let suffix = uploadFile.fileName.toLowerCase()
      let exist = false
      this.errorUploadFiles.forEach(errorUploadFile => {
        if (errorUploadFile.fileName == uploadFile.fileName) {
          // this.logger.debug("错误文件中找到同名照片,无需再加入")
          exist = true
          return
        }
      });
      if(uploadFile.fileSize>maxSiz){//验证大小
        if(!exist){
          this.errorUploadFiles.push(uploadFile)
        }
      }else {
        if(!suffix.endsWith(".jpg")&&!suffix.endsWith(".jpeg")&&!suffix.endsWith(".png")){//验证后缀类型
          if(!exist){
            this.errorUploadFiles.push(uploadFile)
          }
        }else {//符合要求
          uploadFilesTemp.push(uploadFile)
        }
      }
    }
    return uploadFilesTemp
  }


}
