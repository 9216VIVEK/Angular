import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent {
  disable: boolean = true;
  filteredOptions: string[] = ['One', 'Two', 'Three','Four','Five','Six'];

  myControl = {
    enable : ()=> {this.disable=false},
    disable : ()=>{this.disable=true}
  }

  change(){
    this.disable =!this.disable;
  }
}
