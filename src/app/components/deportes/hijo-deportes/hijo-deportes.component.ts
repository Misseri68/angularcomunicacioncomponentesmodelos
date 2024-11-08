import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-deportes',
  templateUrl: './hijo-deportes.component.html',
  styleUrl: './hijo-deportes.component.css'
})
export class HijoDeportesComponent {
  @Input() sport: string;
  constructor() {
    this.sport = "";
  }
  @Output() seleccionarFavHijo: EventEmitter<any> =
  new EventEmitter();

  seleccionarFavHijoInterno():void{
    this.seleccionarFavHijo.emit(this.sport);
  }
}

