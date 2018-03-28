import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-account-security',
  templateUrl: './account-security.component.html',
  styleUrls: ['./account-security.component.scss'],
  providers: []
})
export class AccountSecurityComponent implements OnInit {

  title = '账户安全'
  isLoading:boolean = false;
  user: any={};
  validateForm: FormGroup;
  constructor(private fb: FormBuilder,
              private userService:UsersService,
              private _message: NzMessageService) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      password :            [ '', [ Validators.required,Validators.minLength(6) ,Validators.maxLength(20)] ],
      password_confirmation: [ '', [ this.passwordConfirmationValidator ,Validators.minLength(6),Validators.maxLength(20)] ],
      old_password :         ['', [ Validators.required ,Validators.maxLength(20)] ],
    });
  }

  passwordConfirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls[ 'password' ].value) {
      return { confirm: true, error: true };
    }
  };
  validateConfirmPassword() {
    setTimeout(_ => {
      this.validateForm.controls[ 'password_confirmation' ].updateValueAndValidity();
    })
  }

  _submitForm() {
    if(this.validateForm.invalid){
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[ i ].markAsDirty();
      }
    }else {
      this.isLoading = true;
      this.userService.resetPwd(this.user).subscribe((resp)=>{
        //修改成功
        this._message.success(resp.message);
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
