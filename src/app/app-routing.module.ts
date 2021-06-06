import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'main-home',
    loadChildren: () => import('./main-home/main-home.module').then( m => m.MainHomePageModule)
  },
  {
    path: 'feed-tapioca-morango',
    loadChildren: () => import('./main-home/feed/feed-tapioca-morango/feed-tapioca-morango.module').then( m => m.FeedTapiocaMorangoPageModule)
  },
  {
    path: 'feed-pudim',
    loadChildren: () => import('./main-home/feed/feed-pudim/feed-pudim.module').then( m => m.FeedPudimPageModule)
  },
  {
    path: 'feed-feijoada',
    loadChildren: () => import('./main-home/feed/feed-feijoada/feed-feijoada.module').then( m => m.FeedFeijoadaPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
