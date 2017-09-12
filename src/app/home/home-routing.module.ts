import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {LoginComponent} from "./login/login.component";
import {DetailComponent} from "./detail/detail.component";


const routes: Routes = [
  {path:'',redirectTo:'/main',pathMatch:'full'},
  {path:'main',component:MainComponent},
  {path:'login',component:LoginComponent},
  {path:'detail',component:DetailComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
