import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedPudimPageRoutingModule } from './feed-pudim-routing.module';

import { FeedPudimPage } from './feed-pudim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedPudimPageRoutingModule
  ],
  declarations: [FeedPudimPage]
})
export class FeedPudimPageModule {}
