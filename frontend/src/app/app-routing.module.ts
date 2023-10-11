import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonneComponent } from './list-personne/list-personne.component';
import { CreatePersonneComponent } from './create-personne/create-personne.component';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';
import { DetailsPersonneComponent } from './details-personne/details-personne.component';
import { HomeComponent } from './home/home/home.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  //  {path:'', redirectTo:"home"},
  {path:'personnes', component:ListPersonneComponent},
  {path:'Create-personne', component:CreatePersonneComponent},
  {path:'details-personne/:id', component:DetailsPersonneComponent},
  {path:'modifier-personne/:id', component:UpdatePersonneComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }