import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/game-schedule/game-schedule.module').then(m => m.GameScheduleModule)
          }
        ]
      },
      {
        path: 'ranking',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/ranking/ranking.module').then(m => m.RankingModule)
          }
        ]
      },
      {
        path: 'team',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/team/team-list/team-list.module').then(m => m.TeamListPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }

