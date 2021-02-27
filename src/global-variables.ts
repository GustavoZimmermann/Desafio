import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })

export class Global {
    Usuarios = new Array();
    Cafes = new Array();
    Evento = new Array();
    Salas = new Number();
    UltimaSalaCadastrada = new Number();
    UltimoCafeCadastrada = new Number();
    NumeroUsuarios = new Number();
    NumeroCafes = new Number();    
}
