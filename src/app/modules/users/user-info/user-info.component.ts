import { Component, OnInit } from '@angular/core';
import {QiniuUploadFile} from '../../../shared/service/qiniu/qiniu-upload-file.model';
import {QINIU_DOMAIN} from '../../../constant/config';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {QiniuUploadService} from '../../../shared/service/qiniu/qiniu-upload.service';
import {NzMessageService} from 'ng-zorro-antd';
import {UsersService} from '../../../shared/service/users.service';
import {AppService} from '../../../shared/service/app.service';
import {FileValidationService} from '../../../shared/service/qiniu/file-validation.service';
import {UploadFile} from '../../../shared/models/upload-file.model';
import {timeToString} from '../../../shared/util/string-utils';
import {QiniuUploadToken} from '../../../shared/service/qiniu/qiniu-upload-token.model';
import {CacheService} from '../../../shared/service/cache.service';
import {CurrUserModel} from '../../../shared/models/curr-user.model';
import {CurrUserService} from '../../../shared/service/curr-user.service';
import {mobileValidate} from '../../../shared/util/formControl-validate-utils';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styles:[`
      .ant-avatar-lg {
        width: 52px;
        height: 52px;
        line-height: 52px;
        border-radius: 26px;
        margin-left: 10px;
      }
    `],
  providers:[
    UsersService, QiniuUploadService, FileValidationService
  ]
})
export class UserInfoComponent implements OnInit {

  isLoading:boolean = false;
  user: any={};
  qiniuDomain=QINIU_DOMAIN;
  validateForm: FormGroup;
  qiniuUploadService: QiniuUploadService;
  constructor(private fb: FormBuilder,
              private userService:UsersService,
              private appService:AppService,
              qiniuUploadService: QiniuUploadService,
              private cacheService:CacheService,
              private currUserService:CurrUserService,
              private _message: NzMessageService,
              private fileValidationService:FileValidationService,) {
    this.qiniuUploadService = qiniuUploadService;
  }

  ngOnInit() {
    this.user = this.cacheService.getCurrUserInfo();
    this.user.sex=this.user.sex?this.user.sex:1;
    this.validateForm = this.fb.group({
      loginName           : [ this.user.loginName, [ Validators.required,Validators.maxLength(20) ] ],
      nickName            : [ this.user.nickName, [ Validators.required,Validators.maxLength(20) ] ],
      email          : [ this.user.email, [ Validators.email,Validators.maxLength(50) ] ],
      mobile              : [ this.user.mobile, [ mobileValidate] ],
      sex       : [ this.user.sex, [ Validators.required ] ],
      headImg             : [ this.user.headImg, [  ] ],
    });
  }
  _submitForm() {
    if(this.validateForm.invalid){
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[ i ].markAsDirty();
      }
    }else {
      this.isLoading = true;
      this.userService.saveOrUpdateUser(this.user).then((resp)=>{
        //修改成功
        if(resp.code == "SUCCESS"){
          let user = resp.data;
          this.cacheService.setCurrUserInfo(user);
          let currUser = new CurrUserModel(user.id,user.nickName,user.id);
          this.currUserService.setCurrUser(currUser);
          this._message.success("修改成功！");
        }else {
          this._message.error("修改失败，请重试！");
        }
        this.isLoading = false;
      },(error)=>{
        console.error("保存出错：",error);
        this.isLoading = false;
        let jsonResult = JSON.parse(error._body)
        this._message.error(jsonResult.msg);
      })
    }
  }

  getFormControl(name) {
    return this.validateForm.controls[ name ];
  }

  toSelectFile(e){
    document.getElementById("headImg").click();
  }

  /**
   * 选图后
   *
   * @param event
   * @returns {boolean}
   */
  onAfterSelect(event: any) {
    let $this  = this;
    let files = event.target.files
    //再次验证文件夹条件
    // newUploadFiles = this.qiniuUploadService.fileFilter(newUploadFiles,20);

    //将新图加到 uploadFiles
    let validUploadFiles: UploadFile[] = []
    for (let i = 0; i < files.length; i++) {// only one
      let now = new Date();
      let file: any = files[i];
      let fileSize = (file.size / (1024 * 1024)).toFixed(2)
      let fileSizeFloat = parseFloat(fileSize)
      let lastUpdateTime = timeToString(file.lastModified)
      let uploadFile = new UploadFile(file.name, file.webkitRelativePath, fileSizeFloat, lastUpdateTime, file);
      validUploadFiles.push(uploadFile);
    }
    validUploadFiles = $this.fileValidationService.checkSize(validUploadFiles,2);
    //保存文件信息
    $this.appService.getToken(validUploadFiles.length).then((tokens:QiniuUploadToken)=>{
      for (let i = 0; i < validUploadFiles.length; i++) {
        let uploadFile = validUploadFiles[i];
        let qiniuUploadFile = new QiniuUploadFile(uploadFile)
        qiniuUploadFile.uploadToken = tokens[i]
        console.log("开始上传文件key=：");
        console.log(qiniuUploadFile.uploadToken.key);
        $this.qiniuUploadService.upload(qiniuUploadFile).subscribe(uploadResult => {
          // if(this.processBarEl) {
          //   this.processBarEl.innerHTML = uploadResult.progress + '%'
          // }
        }, error => {
          console.error("上传图片出错",error);
        }, () => {
          console.log("++++++++=上传图片成功========");
          $this.user.headImg = qiniuUploadFile.uploadToken.key;
        })
      }
    })
  }
}
