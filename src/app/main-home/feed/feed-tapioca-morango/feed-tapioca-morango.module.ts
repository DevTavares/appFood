import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedTapiocaMorangoPageRoutingModule } from './feed-tapioca-morango-routing.module';

import { FeedTapiocaMorangoPage } from './feed-tapioca-morango.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedTapiocaMorangoPageRoutingModule
  ],
  declarations: [FeedTapiocaMorangoPage]
})
export class FeedTapiocaMorangoPageModule {}
