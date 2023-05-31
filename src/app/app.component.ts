import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   result:String ='';

  getModuleRequest(val : String){
    this.result =val;
  }

  onBlur(textval : string){
    if (textval.length>1){
      alert('Please do not enter value');
      
    }
    return;
  }
}
