import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { TabsRoutingModule } from './tabs-routing.module';

import { GameScheduleModule } from '../pages/game-schedule/game-schedule.module';
import { RankingModule } from '../pages/ranking/ranking.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    GameScheduleModule,
    RankingModule,
    TabsRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
