import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceitaDiaPageRoutingModule } from './receita-dia-routing.module';

import { ReceitaDiaPage } from './receita-dia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitaDiaPageRoutingModule
  ],
  declarations: [ReceitaDiaPage]
})
export class ReceitaDiaPageModule {}
