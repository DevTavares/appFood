import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedDaydetailsPageRoutingModule } from './feed-daydetails-routing.module';

import { FeedDaydetailsPage } from './feed-daydetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedDaydetailsPageRoutingModule
  ],
  declarations: [FeedDaydetailsPage]
})
export class FeedDaydetailsPageModule {}
