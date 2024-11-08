import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes',
  templateUrl: './padre-deportes.component.html',
  styleUrl: './padre-deportes.component.css'
})
export class PadreDeportesComponent {
  public deportes: Array<string>;
  public favorito: string = "";

  constructor() {
    this.deportes = [
      "Tenis",
      "Fórmula 1",
      "Rugby",
      "Golf",
      "Cricket",
      "Futbol"
    ]
  }

  seleccionarFavPadre(event: any){
    this.favorito = event;
  }


}
