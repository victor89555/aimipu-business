import { Router } from '@angular/router';
import { Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import {CacheService} from '../../../shared/service/cache.service';
import {CurrUserService} from '../../../shared/service/curr-user.service';
import {fadeInAnimation} from '../../../routing/route.animation';
import {CurrUserModel} from '../../../shared/models/curr-user.model';
import {LoginService} from '../../../shared/service/login.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-pages-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[LoginService],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class LoginComponent implements OnInit{
  user:any={};
  valForm: NgForm;
  @ViewChild('valForm') currentForm: NgForm;
  currUser:CurrUserModel=  new CurrUserModel(null,null,null);
  isLoading:boolean = false;
  valForm1: FormGroup;
  constructor( fb: FormBuilder,
               private router: Router,
               private loginService:LoginService,
               private message: NzMessageService,
               private cacheService:CacheService,
               private currUserService:CurrUserService,) {
    this.valForm1 = fb.group({
      loginName: [null, Validators.compose([Validators.required])],//, Validators.email
      password: [null, Validators.required],
      remember_me: [null]
    });
  }

  ngOnInit() {
    this.logout();
    this.currUserService.currUserChange.subscribe((currUserModel) => {
      this.currUser = currUserModel;
    });
  }
  submit(){
    let user = {id:1,nickName:"测试开发模拟",role:1};
    this.cacheService.setCurrUserInfo(user);
    let currUser = new CurrUserModel(user.id,user.nickName,user.role);
    this.currUserService.setCurrUser(currUser);
    this.router.navigate(['/auth-guard']);

    if (this.valForm1.valid) {
      this.isLoading = true;
      this.loginService.login(this.user).then((resp)=>{
        if(resp.code == "SUCCESS"){
          let user = resp.data;
          console.log(user);
          //登录成功
          this.cacheService.setCurrUserInfo(user);
          let currUser = new CurrUserModel(user.id,user.nickName,user.role);
          this.currUserService.setCurrUser(currUser);
          this.router.navigate(['/auth-guard']);
        }else {
          this.message.error(resp.message);
        }
        this.isLoading = false;
      },(error)=>{//后台验证错误再根据具体错误指定 control dialog
        console.log("登录户出错",error);
        this.isLoading = false;
        let jsonResult = JSON.parse(error._body)
        if(jsonResult.errCode=="SERVICE/ERR_PASSWORD_INCORRECT"||jsonResult.errCode=="SERVICE/ERR_SYS_USER_NOT_EXIST"){
          this.message.error("用户名或密码不正确！");
        }else {
          this.message.error("登录出错："+jsonResult.msg);
        }
      })
    }else {
      for (const i in this.valForm1.controls) {
        this.valForm1.controls[i].markAsDirty();
      }
    }
  }

  logout(){
    this.loginService.logout().then((result)=>{
      this.currUserService.clearCurrUser()
      this.cacheService.clear()
    })
  }
}
