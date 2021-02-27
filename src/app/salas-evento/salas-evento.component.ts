import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Global } from 'src/global-variables';

@Component({
  selector: 'app-salas-evento',
  templateUrl: './salas-evento.component.html',
  styleUrls: ['./salas-evento.component.css']
})
export class SalasEventoComponent implements OnInit {
  nomeEvento = new FormControl('')
  lotacaoEvento = new FormControl('')
  salasEvento = new Array()

  constructor(private global: Global) { }

  ngOnInit(): void {

    this.salasEvento = this.global.Evento

  }
  cadastrarSalaEvento() {    
    var numeroSala = parseInt(this.global.Salas.toString()) 
    numeroSala++    
    this.global.Salas = numeroSala;

    var salaEvento = {
      "Id": numeroSala,
      "Nome": this.nomeEvento.value,
      "Lotacao": this.lotacaoEvento.value
    }
    this.global.Evento.push(salaEvento)
  }
}

