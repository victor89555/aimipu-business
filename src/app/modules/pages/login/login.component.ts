import { Router } from '@angular/router';
import { Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import {CacheService} from '../../../shared/service/cache.service';
import {LoginService} from './login.service';
import {NzMessageService} from 'ng-zorro-antd';
import {UsersService} from '../../users/users.service';
import {AuthorizationService} from 'rebirth-permission';
import {CurrUserService} from '../../../shared/service/curr-user.service';
import {CurrUserModel} from '../../../shared/models/curr-user.model';
import {ShopService} from '../../users/shop-management/shop.service';

@Component({
  selector: 'app-pages-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit{
  user:any={};
  valForm: NgForm;
  @ViewChild('valForm') currentForm: NgForm;
  isLoading:boolean = false;
  valForm1: FormGroup;


  currUser:CurrUserModel=  new CurrUserModel(null,null,null);
  constructor( fb: FormBuilder,
               private router: Router,
               private loginService:LoginService,
               private userService:UsersService,
               private message: NzMessageService,
               private cacheService:CacheService,
               private currUserService:CurrUserService,
               private authorizationService: AuthorizationService,
               private shopService: ShopService) {
    this.valForm1 = fb.group({
      phone: [null, Validators.compose([Validators.required])],//, Validators.email
      password: [null, Validators.required],
      remember_me: [null]
    });
  }

  ngOnInit() {
    this.currUserService.currUserChange.subscribe((currUserModel) => {
      this.currUser = currUserModel;
    });
  }
  submit(){
    if (this.valForm1.valid) {
      this.isLoading = true;
      this.loginService.login(this.user).subscribe((appInfo)=>{
        this.authorizationService.setCurrentUser(appInfo)
        this.getUserInfo()
        this.getShops()
      },error=>{
        this.isLoading = false;
        this.message.error("登录出错："+error.error.error);
      })
    }else {
      for (const i in this.valForm1.controls) {
        this.valForm1.controls[i].markAsDirty();
      }
    }
  }

  getUserInfo(){
    console.log('getUserInfo()')
    this.userService.loadUserInfo().subscribe((user)=>{
      // console.log(user)
      this.cacheService.setCurrUserInfo(user);
      let currUser = new CurrUserModel(user.id,user.name,user.phone);
      this.currUserService.setCurrUser(currUser);
      this.router.navigate(['/auth-guard']);
      // this.message.error(res.message);
    },error=>{

    })
  }

  getShops(){
    console.log('getShops')
    this.shopService.getAllShops().subscribe((res)=>{
      this.cacheService.setShops(res.data);
    },error=>{

    })
  }
}
