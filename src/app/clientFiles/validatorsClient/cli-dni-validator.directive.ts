import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { EmptyError } from 'rxjs';

@Directive({
  selector: '[CliDniValidator]',
  providers:[{provide: NG_VALIDATORS, useExisting: CliDniValidatorDirective, multi:true}]
})
export class CliDniValidatorDirective implements Validator{
  
  validate(control: AbstractControl): import("@angular/forms").ValidationErrors{
    const txtInput = <string> control.value;

    if(!txtInput || txtInput.length==0)
    {
      return {'CliDniValidator':{'message':'Is required'}};
    }
    if(!txtInput.match( "^[A-z0-9_\-]+$"))
      return {'CliDniValidator':{'message':'Cannot use especial characters'} };

    if(txtInput.length != 8)
      return {'CliDniValidator':{'message':'Must have 8 characters'}};

    

    return EmptyError;
  }

}
