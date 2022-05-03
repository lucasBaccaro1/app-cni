import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AiresComponent } from './components/pages/aires/aires.component';
import { FletesComponent } from './components/pages/fletes/fletes.component';
import { MascotasComponent } from './components/pages/mascotas/mascotas.component';
import { OportunidadesComponent } from './components/pages/oportunidades/oportunidades.component';
import { RefrigeracionComponent } from './components/pages/refrigeracion/refrigeracion.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent}, 
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'mascotas', component : MascotasComponent},
  {path: 'fletes', component : FletesComponent},
  {path: 'refrigeracion', component : RefrigeracionComponent},
  {path: 'oportunidades', component : OportunidadesComponent},
  {path: 'aires', component : AiresComponent},
  {path: '**', redirectTo : 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
