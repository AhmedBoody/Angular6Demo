import{AbstractControl,ValidationErrors} from '@angular/forms'
import { NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core/src/view/provider';
import { ReturnStatement } from '@angular/compiler';
import { promise } from 'protractor';
import { reject } from 'q';
export class UsernameValiators{

   static cannotContainSpace(control:AbstractControl):ValidationErrors | null{
        if((control.value as string).indexOf(' ') >= 0)
           return {cannotContainSpace:true};
           return null;
    }
    
    static shouldBeUinque(control:AbstractControl):Promise<ValidationErrors| null>
    {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(control.value == 'mosh')
                resolve ({shouldBeUinque :true});
             else
              resolve (null);            
            }, 2000);
        });
    
    }

}