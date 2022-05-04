import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fletes',
  templateUrl: './fletes.component.html',
  styleUrls: ['./fletes.component.css']
})
export class FletesComponent implements OnInit {

  constructor() { }
  model: NgbDateStruct | undefined;
  mensajeDia:any;
  mensajeMes:any;


  mensajeFecha: any;
  modelOrigen: any;
  mensajeOrigen: any;


  modelDestino : any;
  mensajeDestino: any;

  valorInputOirgen(valorInputName: string) {
  
    this.mensajeOrigen = valorInputName;
    }

    valorInputDestino(valorInputDestino: string) {
      this.mensajeDestino = valorInputDestino;
    }  

    valorInputDisponibilidad(valorInputDisponibilidad : NgbDateStruct){
      this.mensajeDia = valorInputDisponibilidad.day;
    }
  ngOnInit(): void {
  }

}
