import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropietarioComponent } from './page/propietario/propietario.component';
import { VehiculoComponent } from './page/vehiculo/vehiculo.component';

const routes: Routes = [{
  path: 'propietarios', component: PropietarioComponent, children:[

  ]
},{
  path:'vehiculos',component:VehiculoComponent,children:[

  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
