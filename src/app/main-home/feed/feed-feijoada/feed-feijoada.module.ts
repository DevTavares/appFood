import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedFeijoadaPageRoutingModule } from './feed-feijoada-routing.module';

import { FeedFeijoadaPage } from './feed-feijoada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedFeijoadaPageRoutingModule
  ],
  declarations: [FeedFeijoadaPage]
})
export class FeedFeijoadaPageModule {}
