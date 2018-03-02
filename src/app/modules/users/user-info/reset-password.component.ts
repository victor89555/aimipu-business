import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {UsersService} from '../../../shared/service/users.service';

@Component({
  selector: 'reset-password',
  template: `
    <form nz-form [formGroup]="validateForm" (ngSubmit)="_submitForm()">
      <div nz-form-item nz-row>
        <div nz-col [nzSpan]="7" nz-form-label>
          <label nz-form-item-required>旧密码</label>
        </div>
        <div>
          <div nz-col [nzSpan]="12" nz-form-control [nzValidateStatus]="getFormControl('oldPassword')" nzHasFeedback>
            <nz-input formControlName="oldPassword" [(ngModel)]="user.oldPassword" [nzPlaceHolder]="'旧密码'" [nzType]="'password'" [nzSize]="'large'">
            </nz-input>
            <div nz-form-explain *ngIf="getFormControl('oldPassword').dirty&&getFormControl('oldPassword').hasError('required')">请输入旧密码!</div>
            <div nz-form-explain *ngIf="getFormControl('oldPassword').dirty&&getFormControl('oldPassword').hasError('maxlength')">不能超过36个字!</div>
          </div>
        </div>
      </div>
      <div nz-form-item nz-row>
        <div nz-col [nzSpan]="7" nz-form-label>
          <label nz-form-item-required>新密码</label>
        </div>
        <div>
          <div nz-col [nzSpan]="12" nz-form-control [nzValidateStatus]="getFormControl('newPassword')" nzHasFeedback>
            <nz-input formControlName="newPassword" [(ngModel)]="user.newPassword" [nzPlaceHolder]="'新密码'" [nzType]="'password'" [nzSize]="'large'" (ngModelChange)="validateConfirmPassword()">
            </nz-input>
            <div nz-form-explain *ngIf="getFormControl('newPassword').dirty&&getFormControl('newPassword').hasError('required')">请输入新密码!</div>
            <div nz-form-explain *ngIf="getFormControl('newPassword').dirty&&getFormControl('newPassword').hasError('maxlength')">不能超过36个字!</div>
            <div nz-form-explain *ngIf="getFormControl('newPassword').dirty&&getFormControl('newPassword').hasError('minlength')">不能少于6个字!</div>

          </div>
        </div>
      </div>
      <div nz-form-item nz-row>
        <div nz-col [nzSpan]="7" nz-form-label>
          <label nz-form-item-required>确认新密码</label>
        </div>
        <div nz-col [nzSpan]="12" nz-form-control [nzValidateStatus]="getFormControl('passwordConfirmation')" nzHasFeedback>
          <nz-input formControlName="passwordConfirmation" [(ngModel)]="user.passwordConfirmation" [nzType]="'password'" [nzPlaceHolder]="'确认新密码'" [nzSize]="'large'">
          </nz-input>
          <div nz-form-explain *ngIf="getFormControl('passwordConfirmation').dirty&&getFormControl('passwordConfirmation').hasError('required')">请输入确认新密码!</div>
          <div nz-form-explain *ngIf="getFormControl('passwordConfirmation').dirty&&getFormControl('passwordConfirmation').hasError('maxlength')">不能超过36个字!</div>
          <div nz-form-explain *ngIf="getFormControl('passwordConfirmation').dirty&&getFormControl('passwordConfirmation').hasError('minlength')">不能少于6个字!</div>
          <div nz-form-explain *ngIf="getFormControl('passwordConfirmation').dirty&&getFormControl('passwordConfirmation').hasError('confirm')">两次输入的密码不一致!</div>
        </div>
      </div>
      <div nz-form-item nz-row>
        <div nz-col [nzOffset]="7" [nzSpan]="12" nz-form-control>
          <button nz-button [nzType]="'primary'" [nzSize]="'large'" [disabled]="!validateForm.valid">保存</button>
        </div>
      </div>
    </form>
  `,
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
    UsersService,
  ]
})
export class ResetPasswordComponent implements OnInit {

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
