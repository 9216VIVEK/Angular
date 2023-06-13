import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './owns/form/form.component';
import { LoginComponent } from './owns/login/login.component';
import { MaterialsComponent } from './owns/materials/materials.component';
import { NoPageComponent } from './no-page/no-page.component';
import { PipeComponent } from './users/pipe/pipe.component';
import { SignupComponent } from './users/signup/signup.component';

const routes: Routes = [
  {
    path :'header',
    component :HeaderComponent,
    children :[
      {
      
        
        path:'pipe',
        component:PipeComponent
      },
      {
        path:'signup',
        component:SignupComponent
      }
    ]

  },
  {
    path :'form',
    component :FormComponent
  },
  {
    path :'',
    component :LoginComponent,
  },
  {
    path :'materials/:userId',
    component :MaterialsComponent
  },
  {
    path :'**',
    component :NoPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
