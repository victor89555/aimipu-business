import { Router } from '@angular/router';
import { Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import {CacheService} from '../../../shared/service/cache.service';
import {LoginService} from './login.service';
import {NzMessageService} from 'ng-zorro-antd';
import {UsersService} from '../../users/users.service';
import {AuthorizationService} from 'rebirth-permission';

@Component({
  selector: 'app-pages-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[LoginService,UsersService]
})
export class LoginComponent implements OnInit{
  user:any={};
  valForm: NgForm;

  @ViewChild('valForm') currentForm: NgForm;
  isLoading:boolean = false;
  valForm1: FormGroup;
  constructor( fb: FormBuilder,
               private router: Router,
               private loginService:LoginService,
               private userService:UsersService,
               private message: NzMessageService,
               private cacheService:CacheService,
               private authorizationService: AuthorizationService) {
    this.valForm1 = fb.group({
      phone: [null, Validators.compose([Validators.required])],//, Validators.email
      password: [null, Validators.required],
      remember_me: [null]
    });
  }

  ngOnInit() {
    this.logout();
  }
  submit(){
    if (this.valForm1.valid) {
      this.isLoading = true;
      this.loginService.login(this.user).subscribe((appInfo)=>{
        this.authorizationService.setCurrentUser(appInfo)
        this.userService.loadUserInfo().subscribe((user)=>{
          console.log(user)
          this.cacheService.setCurrUserInfo(user);
          this.router.navigate(['/auth-guard']);
          // this.message.error(res.message);
        })
      })
    }else {
      for (const i in this.valForm1.controls) {
        this.valForm1.controls[i].markAsDirty();
      }
    }
  }

  logout(){
    this.loginService.logout()
  }
}
