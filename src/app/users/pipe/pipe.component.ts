import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  
  data = {
    "Name":"Vivek",
    "Designation":"Java Developer",
    "UserId":"123435678",
    "Address":"Dehradun",
  }

  date : Date = new Date();

  name : string = "vivek s rawat";
}
