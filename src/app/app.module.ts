import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario/formulario.component';
import { TablaComponent } from './tabla/tabla/tabla.component';
import { EncabezadoComponent } from './encabezado/encabezado/encabezado.component';
import { MenuComponent } from './menu/menu/menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { GrillaComponent } from './grilla/grilla.component';
import { LibroComponent } from './libro/libro.component';
import { AutorComponent } from './autor/autor.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TablaComponent,
    EncabezadoComponent,
    MenuComponent,
    InicioComponent,
    GrillaComponent,
    LibroComponent,
    AutorComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
