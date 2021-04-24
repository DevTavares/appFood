import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedPage } from './feed.page';

const routes: Routes = [
  {
    path: '',
    component: FeedPage
  },
  {
    path: 'feed-details',
    loadChildren: () => import('./feed-details/feed-details.module').then( m => m.FeedDetailsPageModule)
  },
  {
    path: 'feed-daydetails',
    loadChildren: () => import('./feed-daydetails/feed-daydetails.module').then( m => m.FeedDaydetailsPageModule)
  },
  {
    path: 'feed-bolo',
    loadChildren: () => import('./feed-bolo/feed-bolo.module').then( m => m.FeedBoloPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedPageRoutingModule {}
