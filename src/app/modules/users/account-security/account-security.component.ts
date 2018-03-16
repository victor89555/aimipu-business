import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../../shared/service/users.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-account-security',
  templateUrl: './account-security.component.html',
  styleUrls: ['./account-security.component.scss'],
  providers: [UsersService]
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
      newPassword :            [ '', [ Validators.required,Validators.minLength(6) ,Validators.maxLength(36)] ],
      passwordConfirmation: [ '', [ this.passwordConfirmationValidator ,Validators.minLength(6),Validators.maxLength(36)] ],
      oldPassword :         ['', [ Validators.required ,Validators.maxLength(36)] ],
    });
  }

  passwordConfirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls[ 'newPassword' ].value) {
      return { confirm: true, error: true };
    }
  };
  validateConfirmPassword() {
    setTimeout(_ => {
      this.validateForm.controls[ 'passwordConfirmation' ].updateValueAndValidity();
    })
  }

  _submitForm() {
    if(this.validateForm.invalid){
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[ i ].markAsDirty();
      }
    }else {
      this.isLoading = true;
      this.userService.modifyPassword(this.user).then((user)=>{
        //修改成功
        this._message.success("修改成功！");
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
