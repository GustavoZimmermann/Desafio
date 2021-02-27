import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Global } from 'src/global-variables';

@Component({
  selector: 'app-espacos-cafe',
  templateUrl: './espacos-cafe.component.html',
  styleUrls: ['./espacos-cafe.component.css']
})
export class EspacosCafeComponent implements OnInit {


  constructor(private global: Global) { }
  nomeCafe = new FormControl('')
  lotacaoCafe = new FormControl('')
  espacosCafe = new Array()

  ngOnInit(): void {

    this.espacosCafe = this.global.Cafes

  }
  cadastrarEspacoCafe() {

    var numeroCafes = parseInt(this.global.NumeroCafes.toString()) 
    numeroCafes++    
    this.global.NumeroCafes = numeroCafes; 

    var espacoCafe = {
      "Id": numeroCafes,
      "Nome": this.nomeCafe.value,
      "Lotacao": this.lotacaoCafe.value
    }
    this.global.Cafes.push(espacoCafe)
    console.log(this.global.Cafes);

  }
}
