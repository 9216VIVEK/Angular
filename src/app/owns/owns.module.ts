import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoopsComponent } from './loops/loops.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MaterialsComponent } from './materials/materials.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    LoginComponent,
    LoopsComponent,
    FormComponent,
    MaterialsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
    MatSlideToggleModule
  ],
  exports :[
    LoginComponent,
    LoopsComponent,
    FormComponent,
    MaterialsComponent
  ]
})
export class OwnsModule { }
