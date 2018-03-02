/**
 * Created by zoushuiyun on 2017/7/10.
 */

/**
 * 封装错误提示
 * 参考新增、编辑用户组件使用
 *
 * @param data 表单controls group
 * @param form 表单对象   form: NgForm;
 * @param formErrors 错误对象  formErrors:any={}
 * @returns {any}
 */
export function validateFormControls(data?: any,form?:any,formErrors?:any){
  for (const field in data) {
    formErrors[field] = '';
    const control = form.get(field);
    if (control && ((control.dirty && !control.valid)||(control.status=="INVALID"))) {
      for (const key in control.errors) {
        if(key=="required"){
          formErrors[field] += '不能为空 ';
        }else if(key=="minlength"){
          formErrors[field] += '最少要有'+control.errors[key].requiredLength+'子字符';
        }else if(key=="maxlength"){
          formErrors[field] += '不能超过'+control.errors[key].requiredLength+'子字符';;
        }else if(key=="MobileValidate"){
          formErrors[field] += control.errors[key].tip + ' ';
        }else {//TODO 后续有添加新directive 则在此处 继续添加 编辑各种错误提示
          formErrors[field] += key + ' ';
        }
      }
    }
  }
  return formErrors;
}

export function validateFormGroup(formGroup?: any, formErrors?: any,noNeedTouched?:boolean) {
  for (const field in formGroup.controls) {
    formErrors[field] = '';
    const control = formGroup.controls[field];
    let condition = control  && control.dirty && !control.valid;
    if(noNeedTouched){
      condition = control && !control.valid;
    }
    if (condition) {
      control.markAsDirty();
      for (const key in control.errors) {
        if (key == 'required') {
          formErrors[field] += '不能为空 ';
        } else if (key == 'minlength') {
          formErrors[field] += '最少要有' + control.errors[key].requiredLength + '个字符';
        }else if (key == 'min') {
          formErrors[field] += '不能小于' + control.errors[key].min + '';
        } else if (key == 'maxlength') {
          formErrors[field] += '不能超过' + control.errors[key].requiredLength + '个字符';
        } else if (key == 'MobileValidate') {
          formErrors[field] += control.errors[key].tip + ' ';
        } else if (key == 'mobileValidate') {
          formErrors[field] += '手机号码格式不正确 ';
        } else {//TODO 后续有添加新directive 则在此处 继续添加 编辑各种错误提示
          formErrors[field] += key + ' ';
        }
      }
    }
  }
  return formErrors;
}
