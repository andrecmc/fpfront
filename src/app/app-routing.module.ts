import { NgModule } from '@angular/core';
import { FplistComponent } from './fplist/fplist.component';
import { FpdetailComponent } from './fpdetail/fpdetail.component';
import { FpnewComponent } from './fpnew/fpnew.component';
import { FpeditComponent } from './fpedit/fpedit.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'fplist',
    component: FplistComponent,
    data: { title: 'Lista de Planos de Voo' }
  },
  {
    path: 'fpdetail/:id',
    component: FpdetailComponent,
    data: { title: 'Detalhe do Plano de Voo' }
  },
  {
    path: 'fpnew',
    component: FpnewComponent,
    data: { title: 'Adicionar Plano de Voo' }
  },
  {
    path: 'fpedit/:id',
    component: FpeditComponent,
    data: { title: 'Editar Plano de Voo' }
  },
  { path: '',
    redirectTo: '/fplist',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
