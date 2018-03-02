/**
 * 上传文件
 */
export class UploadFile {

  /**
   * 文件在服务端存储的key，可用来组装文件的访问路径
   */
  public fileKey: string

  constructor(public fileName: string,
              public filePath: string,
              public fileSize: number,
              public fileUpdateTime: string,
              public file: File) {

  }

}
