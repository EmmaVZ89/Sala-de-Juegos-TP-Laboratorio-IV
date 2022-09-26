import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuJuegosComponent } from '../menu-juegos/menu-juegos.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { JuegodelavidaComponent } from './juegodelavida/juegodelavida.component';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';

const routes: Routes = [
  {path:'ahorcado', component: AhorcadoComponent},
  {path:'mayor-menor', component: MayorMenorComponent},
  {path:"preguntados", component: PreguntadosComponent},
  {path:"juegodelavida", component: JuegodelavidaComponent},
  {path:'', component: MenuJuegosComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule {}
