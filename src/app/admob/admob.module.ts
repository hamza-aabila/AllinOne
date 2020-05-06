import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './../components.module';

import { IonicModule } from '@ionic/angular';

import { AdmobPageRoutingModule } from './admob-routing.module';

import { AdmobPage } from './admob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AdmobPageRoutingModule
  ],
  declarations: [AdmobPage]
})
export class AdmobPageModule {}
