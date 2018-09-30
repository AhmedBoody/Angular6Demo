import { UsernameValiators } from './username.validators';
import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username : new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        UsernameValiators.cannotContainSpace
      
      ],
      UsernameValiators.shouldBeUinque),
      password: new FormControl('',Validators.required)
    }),
  });

  get username(){
    return this.form.get('account.username');
  }

  login(){
    debugger;
    this.form.setErrors({
      invalidLogin:true
    });
  }
}
