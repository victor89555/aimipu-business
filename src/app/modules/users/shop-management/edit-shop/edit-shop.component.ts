import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, NzModalSubject} from 'ng-zorro-antd';
import {ShopService} from '../shop.service';
import {validateFormGroup} from '../../../../shared/util/validate-utils';

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styles: [`
    :host ::ng-deep .customize-footer {
      border-top: 1px solid #e9e9e9;
      padding: 10px 18px 0 10px;
      text-align: right;
      border-radius: 0 0 0px 0px;
      margin: 15px -16px -5px -16px;
    }
  `]
})
export class EditShopComponent implements OnInit ,AfterViewChecked{
  formErrors:any = {};
  validateForm: FormGroup;
  entity:any={};
  isSaving:boolean = false;


  constructor(   private subject: NzModalSubject,private fb: FormBuilder,  private message: NzMessageService,
                 private shopService:ShopService) {
    this.subject.on('onDestory', () => {
      console.log('destroy');
    });
  }

  ngOnInit() {
    console.log(this.entity)
    this.initValidateForm();

  }
  initValidateForm(){
    this.validateForm = this.fb.group({
      name  : [ this.entity.name, [ Validators.required] ],
      origin  : [ this.entity.origin, [ Validators.required] ],
      url  : [ this.entity.url, [ Validators.required] ],
    });
  }
  ngAfterViewChecked(): void {
    this.formChanged();
  }
  formChanged() {
    if (this.validateForm) {
      this.validateForm.valueChanges
        .subscribe(data => {
          this.onValueChanged(data)
        });
    }
  }
  onValueChanged(data?: any) {
    if (!this.validateForm) { return; }
    this.formErrors = validateFormGroup(this.validateForm,this.formErrors);
  }

  submitForm() {
    if(this.isSaving){
      return false;
    }
    if(this.validateForm.invalid){
      this.formErrors = validateFormGroup(this.validateForm,this.formErrors,true);
    }else {
      this.isSaving = true;
      if(this.entity.id==0){
       this.addShop();
      }else {
        this.updateShop();
      }
    }
  }

  addShop(){
    this.shopService.addShop(this.entity).subscribe((resp)=>{
      if(resp.status=="success"){
        this.emitDataOutside();
        this.isSaving = false;
      }else {
        this.message.warning(resp.message);
      }
    },(error)=>{
      console.error('保存出错：',error);
      this.isSaving = false;
      let jsonResult = JSON.parse(error._body)
      this.message.error(jsonResult.msg);
    })
  }
  updateShop(){
    this.shopService.updateShop(this.entity.id,this.entity).subscribe((resp)=>{
      if(resp.status=="success"){
        this.emitDataOutside();
        this.isSaving = false;
      }else {
        this.message.warning(resp.message);
      }
    },(error)=>{
      console.error('保存出错：',error);
      this.isSaving = false;
      let jsonResult = JSON.parse(error._body)
      this.message.error(jsonResult.msg);
    })
  }


  emitDataOutside() {
    this.subject.next(this.entity);
    this.subject.destroy('onCancel');
  }

  handleCancel(e) {
    this.subject.destroy('onCancel');
  }



}
