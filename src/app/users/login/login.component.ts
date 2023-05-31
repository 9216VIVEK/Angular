import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  val = 'vivek';
  disable =true;
  button = 'Enabled';
  SUB ="VVEK";

  enable(){
    if(this.disable==false){
      this.disable = true;
      this.button = 'Enabled';
    }else{
      this.disable = false;
      this.button = 'Disabled';
    }
  }

}
