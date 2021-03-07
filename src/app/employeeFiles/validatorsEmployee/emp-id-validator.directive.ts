import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { EmptyError } from 'rxjs';

@Directive({
  selector: '[EmpIdValidator]',
  providers:[{provide: NG_VALIDATORS, useExisting: EmpIdValidatorDirective, multi:true}]
})
export class EmpIdValidatorDirective implements Validator{
  
  validate(control: AbstractControl): import("@angular/forms").ValidationErrors{
    const txtInput = <string> control.value;

    if(!txtInput || txtInput.length==0)
    {
      return {'EmpIdValidator':{'message':'Is required'}};
    }
    if(!txtInput.match( "^[a-z_\-]+$"))
      return {'EmpIdValidator':{'message':'Must use only letters'} };
    
      if(txtInput.length > 6)
      return {'EmpIdValidator':{'message':'Must have 6 or less characters'}};

      if( txtInput == "admin" )
        return {'EmpIdValidator':{'message':'The ID cannot be admin'}};

    return EmptyError;
  }

}
