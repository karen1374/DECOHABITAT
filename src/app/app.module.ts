import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importamos el ngModel
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonalComponent } from './components/personal/personal.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { VideosComponent } from './components/videos/videos.component';
import { FormularioComponent } from './components/formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalComponent,
    ServiciosComponent,
    GaleriaComponent,
    VideosComponent,
    FormularioComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent,PersonalComponent,ServiciosComponent,GaleriaComponent,VideosComponent,FormularioComponent]
})
export class AppModule { }
