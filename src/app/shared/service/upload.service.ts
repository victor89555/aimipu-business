import {Observable} from "rxjs";
import {UploadFile} from "../models/upload-file.model";
import {UploadResult} from "../models/upload-result.model";

/**
 * 文件上传服务
 */
export abstract class UploadService {

  abstract upload(uploadFile: UploadFile): Observable<UploadResult>

}
