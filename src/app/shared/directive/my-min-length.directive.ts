/**
 * Created by zoushuiyun on 2017/3/20.
 */
import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NG_VALIDATORS, Validator, AbstractControl, Validators, ValidatorFn} from "@angular/forms";
import {myValidNull} from "../util/string-utils";

export function forbiddenMinLengthValidator(numRe: any): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const tagStr:string = myValidNull(control.value)?control.value:control.value.trim()
    let hasError:boolean = false
    console.log(tagStr)
    let tip:string = ""
      if(!myValidNull(tagStr)&&tagStr.length < numRe){
        hasError = true
        tip="最少要有"+numRe+"个字符"
      }
    return hasError ? {'MyMinLength': {tip}} : null;
  };
}

@Directive({
    selector: '[MyMinLength]',
  providers: [{provide: NG_VALIDATORS, useExisting: MyMinLengthDirective, multi: true}]
})
/**
 * 输入框最小长度指令
 */
export class MyMinLengthDirective implements Validator, OnChanges {

  @Input() MyMinLength:any
  private valFn = Validators.nullValidator;
  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['MyMinLength']
    if(change){
      const val:string|RegExp = change.currentValue;
      const num = val ? val : 0;

        this.valFn =  forbiddenMinLengthValidator(num);
    }else {
      this.valFn = Validators.nullValidator;
    }
  }


  validate(c: AbstractControl): {[p: string]: any} {
    return  this.valFn(c);;
  }

}
