import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './../components.module';

import { IonicModule } from '@ionic/angular';

import { CurrencyPageRoutingModule } from './currency-routing.module';

import { CurrencyPage } from './currency.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CurrencyPageRoutingModule
  ],
  declarations: [CurrencyPage]
})
export class CurrencyPageModule {}
