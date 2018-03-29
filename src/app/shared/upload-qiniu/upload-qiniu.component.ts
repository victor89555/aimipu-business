import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DOWNLOAD_DOMAIN} from '../../constant/config';
import {UploadFileUtilService} from '../service/upload-file-util.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'upload-qiniu',
  templateUrl: './upload-qiniu.component.html',
  styleUrls: ['./upload-qiniu.component.scss'],
  providers:[UploadFileUtilService]
})
export class UploadQiniuComponent implements OnInit,DoCheck {
  @Input() needNum:number = 1;
  @Input() images:any=[];
  @Output() callBack= new EventEmitter<any>();

  download=DOWNLOAD_DOMAIN;

  type:any = 1;//1-正常上传，2-点击第i个修改。
  index:number = 0;//修改时点击的是第index个

  constructor(private uploadFileUtilService:UploadFileUtilService,private message: NzMessageService) { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    this.callBack.emit(this.images);
  }
  changeImg(e,i){//todo
    this.type = 2;
    this.index = i;
    document.getElementById("upload-img").click();
  }
  delImg(i){
    this.images.splice(i,1);
  }
  toSelectImage(e) {
    this.type = 1;
    document.getElementById("upload-img").click();

  }

  /**
   * 选图后
   *
   * @param event
   * @returns {boolean}
   */
  onAfterSelect(event: any) {
    let $doc = document.getElementById("upload-img");
    let $this  = this;
    let files = event.target.files;
    for (let i = 0; i < files.length; i++) {// only one;
      let file: any = files[i];
      let fileSize = (file.size / (1024 * 1024)).toFixed(2)
      let fileSizeFloat = parseFloat(fileSize)
      if (fileSizeFloat > 2){
        this.message.warning("图片最大不能超过2MB");
        $doc.setAttribute("type","text");
        $doc.setAttribute("type","file");
        return false;
      }
      this.uploadFileUtilService.uploadFile(file).then((resp: any) => {
        // console.log(resp);
        if(resp.status=="success"){
          if ($this.type ==  1){
            this.images.push(resp.data.filename);
          }else {
            $this.images.splice(this.index,1,resp.data.filename)
          }

          this.callBack.emit(this.images);
        }else {
          this.message.warning(resp.message);
        }
        $doc.setAttribute("type","text");
        $doc.setAttribute("type","file");
      },error=>{
        console.log('上传文件出错');
        $doc.setAttribute("type","text");
        $doc.setAttribute("type","file");
        $this.message.warning('上传文件出错请重新选择上传！')
      })
    }
  }
}
