import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CadastroUsuariosComponent } from './cadastroUsuarios/cadastroUsuarios.component';
import { SalasEventoComponent } from './salas-evento/salas-evento.component';
import { EspacosCafeComponent } from './espacos-cafe/espacos-cafe.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Global } from 'src/global-variables';

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuariosComponent,
    SalasEventoComponent,
    EspacosCafeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [Global],
  bootstrap: [AppComponent]
})
export class AppModule { }