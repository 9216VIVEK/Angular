import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PipeComponent } from './pipe/pipe.component';
import { ConversionPipe } from '../pipes/conversion.pipe';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    TwoWayBindingComponent,
    PipeComponent,
    ConversionPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports :[
    LoginComponent,
    SignupComponent,
    TwoWayBindingComponent,
    PipeComponent
  ]
})
export class UsersModule { }
