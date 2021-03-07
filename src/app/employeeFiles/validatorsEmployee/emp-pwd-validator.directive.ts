import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { EmptyError } from 'rxjs';

@Directive({
  selector: '[EmpPwdValidator]',
  providers:[{provide: NG_VALIDATORS, useExisting: EmpPwdValidatorDirective, multi:true}]
})
export class EmpPwdValidatorDirective implements Validator{
  
  validate(control: AbstractControl): import("@angular/forms").ValidationErrors{
    const txtInput = <string> control.value;

    if(!txtInput || txtInput.length==0)
    {
      return {'EmpPwdValidator':{'message':'Is required'}};
    }
    if(!txtInput.match( "^[A-z0-9_\-]+$"))
      return {'EmpPwdValidator':{'message':'Cannot use especial characters'} };

    if(txtInput.length < 6 || txtInput.length > 12)
      return {'EmpPwdValidator':{'message':'Must have between 6 and 12 characters'}};

    

    return EmptyError;
  }

}
