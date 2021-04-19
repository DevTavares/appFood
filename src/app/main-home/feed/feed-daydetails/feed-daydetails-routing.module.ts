import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedDaydetailsPage } from './feed-daydetails.page';

const routes: Routes = [
  {
    path: '',
    component: FeedDaydetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedDaydetailsPageRoutingModule {}
