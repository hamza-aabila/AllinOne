import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './../components.module';

import { IonicModule } from '@ionic/angular';

import { AppelPageRoutingModule } from './appel-routing.module';

import { AppelPage } from './appel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AppelPageRoutingModule
  ],
  declarations: [AppelPage]
})
export class AppelPageModule {}
