import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedBoloPageRoutingModule } from './feed-bolo-routing.module';

import { FeedBoloPage } from './feed-bolo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedBoloPageRoutingModule
  ],
  declarations: [FeedBoloPage]
})
export class FeedBoloPageModule {}
