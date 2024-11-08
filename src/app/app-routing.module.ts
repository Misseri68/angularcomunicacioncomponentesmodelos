import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { PadreCochesComponent } from './components/coches/padre-coches/padre-coches.component';
import { PadreDeportesComponent } from './components/deportes/padre-deportes/padre-deportes.component';

const routes: Routes = [
  {path: 'lista', component: ListaproductosComponent},
  {path: "coches", component: PadreCochesComponent},
  {path: "deportes", component: PadreDeportesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
