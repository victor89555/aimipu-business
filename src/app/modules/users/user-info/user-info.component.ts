import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {AppService} from '../../../shared/service/app.service';
import {CacheService} from '../../../shared/service/cache.service';
import {mobileValidate} from '../../../shared/util/formControl-validate-utils';
import {UsersService} from '../users.service';
import {CurrUserService} from '../../../shared/service/curr-user.service';
import {CurrUserModel} from '../../../shared/models/curr-user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  providers:[
  ]
})
export class UserInfoComponent implements OnInit {

  title = '个人资料'
  isLoading:boolean = false;
  user: any={};
  validateForm: FormGroup;
  constructor(private fb: FormBuilder,
              private userService:UsersService,
              private appService:AppService,
              private currUserService:CurrUserService,
              private cacheService:CacheService,
              private _message: NzMessageService,) {
  }

  ngOnInit() {
    this.user = this.cacheService.getCurrUserInfo();
    this.user.sex=this.user.sex?this.user.sex:1;
    this.validateForm = this.fb.group({
      name           : [ this.user.name, [ Validators.required,Validators.maxLength(20) ] ],
      qq            : [ this.user.qq, [ Validators.required,Validators.maxLength(20) ] ],
      phone              : [ this.user.phone, [ mobileValidate] ],
    });
  }
  _submitForm() {
    if(this.validateForm.invalid){
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[ i ].markAsDirty();
      }
    }else {
      this.isLoading = true;
      this.userService.updateUserInfo(this.user).subscribe((resp)=>{
        console.log(resp)
        //修改成功
        if(resp.code == "success"){
          this.user = resp.data;
          this.cacheService.setCurrUserInfo(this.user);
          this.currUserService.setCurrUser(new CurrUserModel(this.user.id,this.user.name,this.user.phone));
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



}
