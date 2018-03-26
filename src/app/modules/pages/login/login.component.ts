import { Router } from '@angular/router';
import { Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import {CacheService} from '../../../shared/service/cache.service';
import {CurrUserService} from '../../../shared/service/curr-user.service';
import {fadeInAnimation} from '../../../routing/route.animation';
import {LoginService} from '../../../shared/service/login.service';
import {NzMessageService} from 'ng-zorro-antd';
import {CurrUserModel} from '../../../shared/models/curr-user.model';
import {UsersService} from '../../../shared/service/users.service';

@Component({
  selector: 'app-pages-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[LoginService,UsersService],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class LoginComponent implements OnInit{
  user:any={};
  valForm: NgForm;

  @ViewChild('valForm') currentForm: NgForm;
  currUser:CurrUserModel = new CurrUserModel(null,null,null);
  isLoading:boolean = false;
  valForm1: FormGroup;
  constructor( fb: FormBuilder,
               private router: Router,
               private loginService:LoginService,
               private userService:UsersService,
               private message: NzMessageService,
               private cacheService:CacheService,
               private currUserService:CurrUserService,) {
    this.valForm1 = fb.group({
      phone: [null, Validators.compose([Validators.required])],//, Validators.email
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
    if (this.valForm1.valid) {
      this.isLoading = true;
      this.loginService.login(this.user).then((resp)=>{
        this.cacheService.setAppInfo(resp);
        this.userService.loadUserInfo().then((resp)=>{
          let user = resp;
            console.log(user);
            //登录成功
            this.cacheService.setCurrUserInfo(user);
            let currUser = new CurrUserModel(user.id,user.nickName,user.id);
            this.currUserService.setCurrUser(currUser);
            this.router.navigate(['/auth-guard']);
            this.message.error(resp.message);
          this.isLoading = false;
        },(error)=>{
          this.isLoading = false;
        })


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
