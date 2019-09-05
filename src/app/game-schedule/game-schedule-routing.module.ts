import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameSchedulePage } from './game-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: GameSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameSchedulePageRoutingModule { }
