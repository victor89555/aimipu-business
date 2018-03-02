import {UploadFile} from "./upload-file.model";
/**
 * 文件上传结果
 * Created by zhaixm on 2016/11/24.
 */
export class UploadResult {

  /**
   * 文件在服务端存储的key，可用来组装文件的访问路径
   */
  private _progress: number = 0
  private _finished: boolean = false
  private _result: boolean = false
  private _failReason: string

  constructor(public uploadFile: UploadFile) {

  }

  set progress(value: number) {
    this._progress = value;
  }

  get progress(): number {
    return this._progress;
  }

  get result(): boolean {
    return this._result;
  }

  get failReason(): string {
    return this._failReason;
  }

  get finished(): boolean {
    return this._finished
  }

  setResult(result, failReason: string = null) {
    this._result = result
    this._finished = true
    this._failReason = failReason
  }

}
