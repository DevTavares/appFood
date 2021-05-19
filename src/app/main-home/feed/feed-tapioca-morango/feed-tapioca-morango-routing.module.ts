import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedTapiocaMorangoPage } from './feed-tapioca-morango.page';

const routes: Routes = [
  {
    path: '',
    component: FeedTapiocaMorangoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedTapiocaMorangoPageRoutingModule {}
