import {FormControl} from '@angular/forms';

export function mobileValidate (control: FormControl): { [s: string]: boolean }{
  if (!control.value) {
    return { required: true };
  } else if ((!/^1[34578]\d{9}$/.test(control.value) || control.value.trim().length != 11)) {
    return { mobileValidate: true, error: true };
  }
};
export function fixedPhone (control: FormControl): { [s: string]: boolean }{
  if (!control.value) {
    return { required: true };
  } else if ((!/^1[34578]\d{9}$/.test(control.value) || control.value.trim().length != 11)) {
    return { mobileValidate: true, error: true };
  }
};
