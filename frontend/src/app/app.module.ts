import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePersonneComponent } from './create-personne/create-personne.component';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';
import { DetailsPersonneComponent } from './details-personne/details-personne.component';
import { ListPersonneComponent } from './list-personne/list-personne.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PersonneService } from './personne.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home/home/home.component';
import { InscriptionComponent } from './auth/inscription/inscription/inscription.component';
import { LoginComponent } from './auth/login/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatePersonneComponent,
    UpdatePersonneComponent,
    DetailsPersonneComponent,
    ListPersonneComponent,
    HomeComponent,
    InscriptionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
    
  ],
  providers: [PersonneService],
  bootstrap: [AppComponent]
})
export class AppModule { }