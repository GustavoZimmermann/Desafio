import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuariosComponent } from './cadastroUsuarios/cadastroUsuarios.component';
import { EspacosCafeComponent } from './espacos-cafe/espacos-cafe.component';
import { SalasEventoComponent } from './salas-evento/salas-evento.component';

const routes: Routes = [
  { path: 'cadastroUsuarios', component: CadastroUsuariosComponent },
  { path: 'salas-evento', component: SalasEventoComponent},
  { path: 'espacos-cafe', component: EspacosCafeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
