import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainHomePage } from './main-home.page';

const routes: Routes = [
  {
    path: '',
    component: MainHomePage,
    children: [
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
      },
      {
        path: 'favorite',
        loadChildren: () => import('./favorite/favorite.module').then( m => m.FavoritePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'feed',
        loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule)
      },
      {
        path: 'edit-profile',
        loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
      },
      {
        path: 'feed',
        loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule)
      },
      {
        path: 'receita-dia',
        loadChildren: () => import('./receita-dia/receita-dia.module').then( m => m.ReceitaDiaPageModule)
      },

    ]

  },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainHomePageRoutingModule {}
