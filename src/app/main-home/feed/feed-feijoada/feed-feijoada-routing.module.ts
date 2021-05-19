import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedFeijoadaPage } from './feed-feijoada.page';

const routes: Routes = [
  {
    path: '',
    component: FeedFeijoadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedFeijoadaPageRoutingModule {}
