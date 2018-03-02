/**
 * Created by zoushuiyun on 2017/3/20.
 */
import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NG_VALIDATORS, Validator, AbstractControl, Validators, ValidatorFn} from "@angular/forms";
import {myValidNull} from "../util/string-utils";

export function forbiddenMobileValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const tagStr:string = myValidNull(control.value)?control.value:control.value.trim()
    let hasError:boolean = false
    let tip:string = ""
      if(!myValidNull(tagStr)&&(!/^1[34578]\d{9}$/.test(tagStr) || tagStr.trim().length != 11) ){
        hasError = true
        tip="手机号码格式不正确"
      }
    return hasError ? {'MobileValidate': {tip}} : null;
  };
}

@Directive({
    selector: '[MobileValidate]',
  providers: [{provide: NG_VALIDATORS, useExisting: MobileValidateDirective, multi: true}]
})
/**
 * 手机号码格式验证
 */
export class MobileValidateDirective implements Validator, OnChanges {

  @Input() MobileValidate:any
  private valFn = Validators.nullValidator;
  ngOnChanges(changes: SimpleChanges): void {
    // const change = changes['MobileValidate']
    // if(change){
    //   const val:string|RegExp = change.currentValue;
    //   const num = val ? val : 0;

        this.valFn =  forbiddenMobileValidator();
    // }else {
    //   this.valFn = Validators.nullValidator;
    // }
  }


  validate(c: AbstractControl): {[p: string]: any} {
    return  this.valFn(c);;
  }

}
