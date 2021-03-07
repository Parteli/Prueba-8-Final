import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { EmptyError } from 'rxjs';

@Directive({
  selector: '[CliEmailValidator]',
  providers:[{provide: NG_VALIDATORS, useExisting: CliEmailValidatorDirective, multi:true}]
})
export class CliEmailValidatorDirective implements Validator{
  
  validate(control: AbstractControl): import("@angular/forms").ValidationErrors{
    const txtInput = <string> control.value;

    if(!txtInput || txtInput.length==0)
    {
      return {'CliEmailValidator':{'message':'Is required'}};
    }
    let index: number = txtInput.indexOf("@");
    if(index <= 0 || index == txtInput.length-1)
      return {'CliEmailValidator':{'message':'Invalid format'} };
    

    return EmptyError;
  }

}
