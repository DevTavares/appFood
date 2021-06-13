import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaDiaPage } from './receita-dia.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitaDiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceitaDiaPageRoutingModule {}
