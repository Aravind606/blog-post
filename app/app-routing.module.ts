import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [{
  path:"",
  component: LoginComponent
},
{
  path:"topbar",
  component:TopbarComponent,
  children:[{
    path:"card",
    component:CardComponent
  },
{
  path:"form",
  component:FormComponent
}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
