import {QiniuUploadToken} from "./qiniu-upload-token.model";
import {UploadFile} from "../../models/upload-file.model";
export class QiniuUploadFile extends UploadFile {

  uploadToken: QiniuUploadToken

  constructor(uploadFile: UploadFile) {
    super(uploadFile.fileName, uploadFile.filePath, uploadFile.fileSize, uploadFile.fileUpdateTime, uploadFile.file)
  }

}
