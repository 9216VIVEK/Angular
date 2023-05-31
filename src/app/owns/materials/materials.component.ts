import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent {
  disable: boolean = false;
  filteredOptions: string[] = ['One', 'Two', 'Three'];
  myControl = {
    enable : ()=> {this.disable=false},
    disable : ()=>{this.disable=true}
  }
}
