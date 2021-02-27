import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Global } from 'src/global-variables';

@Component({
  selector: 'app-cadastroUsuarios',
  templateUrl: './cadastroUsuarios.component.html',
  styleUrls: ['./cadastroUsuarios.component.css']
})
export class CadastroUsuariosComponent implements OnInit {
  nomeUsuario = new FormControl('')
  sobrenomeUsuario = new FormControl('')
  listaUsuarios = new Array();

  constructor(private global: Global) { }

  ngOnInit(): void {
    this.listaUsuarios = this.global.Usuarios
  }

  cadastrarUsuario() {
    
    var numeroUsuarios = parseInt(this.global.NumeroUsuarios.toString()) 
    numeroUsuarios++    
    this.global.NumeroUsuarios = numeroUsuarios;    
    
    let evento1 = this.EventoDisponivel()
    let evento2 = this.EventoDisponivel()
    let cafe = this.CafeDisponivel()

    var usuario = {
      "Id": numeroUsuarios,
      "Nome": this.nomeUsuario.value,
      "Sobrenome": this.sobrenomeUsuario.value,
      "Sala1": evento1,
      "Sala2": evento2,
      "Cafe": cafe
    }

    this.global.Usuarios.push(usuario)    
    console.log(this.global.Usuarios)

  }

  EventoDisponivel() {
    var ultimaSala = parseInt(this.global.UltimaSalaCadastrada.toString());
    var eventos = this.global.Evento
    var evento = null;
    
    if (ultimaSala === 0){
      evento = eventos[0]
      this.global.UltimaSalaCadastrada = 1
    } else {
      evento = eventos.filter(e => e.Id == (ultimaSala + 1))[0]
      if (evento === undefined) {
        evento = eventos[0]
      }
      this.global.UltimaSalaCadastrada = evento.Id
    }            
    return evento;
  }

  CafeDisponivel() {
    var ultimoCafe = parseInt(this.global.UltimoCafeCadastrada.toString());
    var cafes = this.global.Cafes
    var cafe = null;
    
    if (ultimoCafe === 0){
      cafe = cafes[0]
      this.global.UltimoCafeCadastrada = 1
    } else {
      cafe = cafes.filter(e => e.Id == (ultimoCafe + 1))[0]
      console.log('ultimoCafe' + ultimoCafe)
      console.log(cafe)
      if (cafe === undefined) {
        cafe = cafes[0]
      }
      this.global.UltimoCafeCadastrada = cafe.Id
    }            
    return cafe;
  }
}