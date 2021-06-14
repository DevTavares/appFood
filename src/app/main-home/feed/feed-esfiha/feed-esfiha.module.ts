import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedEsfihaPageRoutingModule } from './feed-esfiha-routing.module';

import { FeedEsfihaPage } from './feed-esfiha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedEsfihaPageRoutingModule
  ],
  declarations: [FeedEsfihaPage]
})
export class FeedEsfihaPageModule {}
