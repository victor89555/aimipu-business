import {
  ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, OnInit,
  Output
} from '@angular/core';
import {QiniuUploadToken} from '../service/qiniu/qiniu-upload-token.model';
import {QiniuUploadService} from '../service/qiniu/qiniu-upload.service';
import {AppService} from '../service/app.service';
import {UploadFile} from '../models/upload-file.model';
import {myValidNull, timeToString} from '../util/string-utils';
import {QiniuUploadFile} from '../service/qiniu/qiniu-upload-file.model';

import {DOMAIN, QINIU_DOMAIN} from '../../constant/config';

@Component({
  selector: 'my-editor',
  templateUrl: './my-editor.component.html',
  styles: [`
    /*:host ::ng-deep a[href="https://www.froala.com/wysiwyg-editor?k=u"] {display: none !important;}*/
  `],
  providers:[QiniuUploadService]
})
export class MyEditorComponent implements OnInit,DoCheck {
  ngDoCheck(): void {
    this.callBack.emit(this.content);
  }


  @Input() content:any;
  @Output() callBack= new EventEmitter<any>();

  introductionOption:any={};
  token:QiniuUploadToken= new QiniuUploadToken('','5666666');
  firstUpload:boolean = true;

  imgSize:any=0
  imgName:any='图.jpg';

  qiniuUploadService: QiniuUploadService;
  ref:any;
  constructor( qiniuUploadService: QiniuUploadService,ref:ChangeDetectorRef,
               private appService:AppService,) {
    this.qiniuUploadService = qiniuUploadService;
    this.ref = ref;
  }

  ngOnInit() {
    //初始化token以备第一次上传使用
    this.appService.getToken(1).then((token:QiniuUploadToken)=> {
      this.token = token[0]
    })
    this.initFroala();
  }


  initFroala(){
    let $this = this;
    this.introductionOption = {
      language: 'zh_cn',
      heightMin: 200,
      placeholderText: '请输入信息',
      charCounterCount: true,
      toolbarVisibleWithoutSelection:true,
      toolbarButtons: ['fullscreen','fontSize', 'color', '|',
        'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
        'paragraphFormat', 'align',/* 'formatOL', 'formatUL',*/ 'outdent', 'indent', /*'quote',*/ '-',
        'insertLink', 'insertImage', 'insertHR',/* 'insertVideo', 'insertFile', 'insertTable',*/ '|',
        /*'emoticons',*/ 'specialCharacters', 'selectAll', 'clearFormatting', '|',
        'help','html', 'undo', 'redo'
      ],
      quickInsertButtons:['image', 'ul', 'ol', 'hr'],
      // imageEditButtons:['imageDisplay', 'imageAlign', 'imageInfo', 'imageRemove'],
      //Image
      imageAllowedTypes:['jpeg', 'jpg', 'png', 'gif'],
      imageDefaultWidth: 600,
      // 上传图片，视频等稳健配置
      // imageUploadMethod: 'PUT',
      imageUploadURL:DOMAIN+'froala/uploadImg',//GLOBAL.INCONFIG.getIP()+接口名称,
      // imageUploadParams:{qiniuKey:"111111111"},//接口其他传参,默认为空对象{},/*,imgName:this.imgName*/
      //Video
      // videoUploadURL:DOMAIN+"app/uploadVideo",
      // videoAllowedProviders: ['youku','iqiyi'],
      // videoInsertButtons: [ 'videoByURL'],
      // videoDefaultWidth: 610,
      events: {
        'froalaEditor.image.beforeUpload':  function (e, editor, images) {
          let img:any = images[0];
          $this.imgSize = (img.size / (1024 * 1024)).toFixed(2)
          $this.imgName = images[0].name;
          let lastUpdateTime = timeToString(img.lastModified)
          let uploadFile = new UploadFile($this.imgName, img.webkitRelativePath, parseFloat( $this.imgSize), lastUpdateTime, img);
          if($this.firstUpload && !myValidNull($this.token.token)){
            $this.firstUpload = false;
            let qiniuUploadFile = new QiniuUploadFile(uploadFile)
            qiniuUploadFile.uploadToken = $this.token
            $this.ref.markForCheck();
            $this.qiniuUploadService.upload(qiniuUploadFile).subscribe(uploadResult => {
              // if(this.processBarEl) {
              //   this.processBarEl.innerHTML = uploadResult.progress + '%'
              // }
            }, error => {
              console.error('上传错了',error);
            }, () => {
              console.log('++++++++=成功========');
              console.log(qiniuUploadFile.uploadToken.key);
            })
          }else {
            $this.appService.getToken(1).then((token:QiniuUploadToken)=>{
              $this.token = token[0];
              let qiniuUploadFile = new QiniuUploadFile(uploadFile);
              qiniuUploadFile.uploadToken = token[0];
              $this.ref.markForCheck();
              $this.qiniuUploadService.upload(qiniuUploadFile).subscribe(uploadResult => {
                // if(this.processBarEl) {
                //   this.processBarEl.innerHTML = uploadResult.progress + '%'
                // }
              }, error => {
                console.error('上传错了',error);
              }, () => {
                console.log('++++++++=成功========');
                console.log(qiniuUploadFile.uploadToken.key);
              })

            },(error)=>{
              // todo 错误处理
            })
          }

        },
        'froalaEditor.image.inserted':  function (e, editor, $img, response) {
          console.log('+$img++++++inserted------------')
          console.log($img)
          if(!myValidNull(response)){
            $img[0].setAttribute('src', QINIU_DOMAIN + $this.token.key);
          }
        },
        'froalaEditor.image.replaced':  function (e, editor, $img, response) {
          console.log('+$img++++++inserted------------')
          console.log($img)
          if(!myValidNull(response)){
            $img[0].setAttribute('src', QINIU_DOMAIN + $this.token.key);
          }
        },
      }
    }
  }

}

