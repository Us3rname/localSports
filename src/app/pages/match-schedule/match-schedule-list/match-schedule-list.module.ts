import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MatchScheduleListPage } from './match-schedule-list.page';
import { ComponentsModule } from '../../../components/components.module';
import { GameActionMenuPage } from '../about-popover/game-action-menu.page.';
import { SubmitScorePage } from '../about-popover/submit-score.page';
const routes: Routes = [
  {
    path: '',
    component: MatchScheduleListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MatchScheduleListPage, GameActionMenuPage, SubmitScorePage],
  entryComponents: [GameActionMenuPage, SubmitScorePage],
})
export class MatchScheduleListPageModule { }
