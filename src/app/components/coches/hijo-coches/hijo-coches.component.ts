import { Component, Input, input } from '@angular/core';
import { Coche } from '../../../models/Coche';

@Component({
  selector: 'app-hijo-coches',
  templateUrl: './hijo-coches.component.html',
  styleUrl: './hijo-coches.component.css'
})

export class HijoCochesComponent {
  
  @Input() car!: Coche;
  public mensaje: string;
  constructor(){
    this.mensaje = "";
  }

  comprobarEstado(): boolean{
    if(this.car.estado){
      this.mensaje = 'El coche está encendido';
      return true;
    }else{
      this.mensaje = 'El coche está apagado';
      return false;
    }
  }

  encender(){
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }

  acelerarCoche(): void{
    if(this.comprobarEstado()){
      this.car.velocidad = this.car.velocidad + this.car.aceleracion
    }
    else{alert("Bro la de arrancar te la sabes?")}
  }
}
