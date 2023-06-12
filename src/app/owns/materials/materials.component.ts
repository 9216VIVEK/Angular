import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  constructor(private route : ActivatedRoute){}

  ngOnInit(): void {
    console.warn("user Id is ",this.route.snapshot.paramMap.get('userId'));
  }

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
