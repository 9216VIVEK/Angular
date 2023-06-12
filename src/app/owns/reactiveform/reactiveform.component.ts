import { Component } from '@angular/core';
 import {FormControl,FormGroup,Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
  
  loginForm = new FormGroup({
    // user : new FormControl('',[Validators.required,Validators.pattern('[a-z]')]),
    user : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(5)])
  });

  submitform(){
    console.warn(this.loginForm.value);
  }

  get user(){
    return this.loginForm.get('user');
  }
}
