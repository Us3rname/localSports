import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { GameSchedulePage } from './game-schedule.page';
import { GameSchedulePageRoutingModule } from './game-schedule-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameSchedulePageRoutingModule
  ],
  declarations: [GameSchedulePage]
})
export class GameScheduleModule { }
