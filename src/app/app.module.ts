import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { MenuComponent } from './components/menu/menu.component';
import { HijoCochesComponent } from './components/coches/hijo-coches/hijo-coches.component';
import { PadreCochesComponent } from './components/coches/padre-coches/padre-coches.component';
import { PadreDeportesComponent } from './components/deportes/padre-deportes/padre-deportes.component';
import { HijoDeportesComponent } from './components/deportes/hijo-deportes/hijo-deportes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaproductosComponent,
    MenuComponent,
    HijoCochesComponent,
    PadreCochesComponent,
    PadreDeportesComponent,
    HijoDeportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
