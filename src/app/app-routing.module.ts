import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateAdministradorGuard } from './guards/can-activate-administrador.guard';
import { ChatComponent } from './pages/chat/chat.component';
import { EncuestaComponent } from './pages/encuesta/encuesta.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoResultadosComponent } from './pages/listado-resultados/listado-resultados.component';
import { LoginComponent } from './pages/login/login.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RespuestasEncuestaComponent } from './pages/respuestas-encuesta/respuestas-encuesta.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'quiensoy', component: QuienSoyComponent },
  { path: 'chat', component: ChatComponent },
  {
    path: 'juegos',
    loadChildren: () =>
      import('./pages/juegos/juegos-routing.module').then(
        (m) => m.JuegosRoutingModule
      ),
  },
  { path: 'encuesta', component: EncuestaComponent },
  { path: 'listado-resultados', component: ListadoResultadosComponent },
  {
    path: 'respuestas-encuesta',
    component: RespuestasEncuestaComponent,
    canActivate: [CanActivateAdministradorGuard],
  },
  { path: '', component: HomeComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
