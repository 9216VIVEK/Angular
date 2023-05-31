import { Component } from '@angular/core';

@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.css']
})
export class LoopsComponent {

  employee : String[]= ['vivek','himanshu','rohit','sourav'];

  employeeObj ={name:'vivek',age:23,email:'vivek.rawat@gmail.com'};

  employeeArrObj =[
    {name:'vivek',age:23,email:'vivek.rawat@gmail.com'},
    {name:'himanshu',age:20,email:'himanshu.rawat@gmail.com'},
    {name:'rohit',age:29,email:'rohit.kumar@gmail.com'},
    {name:'sourav',age:27,email:'sourav.thakur@gmail.com'}
  ];
}
