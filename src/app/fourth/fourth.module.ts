import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FourthPageRoutingModule } from './fourth-routing.module';

import { FourthPage } from './fourth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FourthPageRoutingModule
  ],
  declarations: [FourthPage]
})
export class FourthPageModule {}
