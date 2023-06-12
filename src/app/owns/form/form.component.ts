import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
   val:string = "";

  getUserValue = (value: any)=>{

    console.warn(value.email)
    console.log(value.password)
    this.val = value.email
    
  }
}