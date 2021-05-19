import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedPudimPage } from './feed-pudim.page';

const routes: Routes = [
  {
    path: '',
    component: FeedPudimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedPudimPageRoutingModule {}
