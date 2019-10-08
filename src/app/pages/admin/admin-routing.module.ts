import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'team', children: [
          {
            path: '',
            loadChildren: () => import('./team/team-list/team-list.module').then(m => m.TeamListPageModule)
          },
          {
            path: 'create',
            loadChildren: () => import('./team/team-create/team-create.module').then(m => m.TeamCreatePageModule)
          },
          {
            path: 'edit/:teamId',
            loadChildren: () => import('./team/team-edit/team-edit.module').then(m => m.TeamEditPageModule)
          },
        ]
      },
      {
        path: 'league', children: [
          {
            path: '',
            loadChildren: () => import('./league/league-list/league-list.module').then(m => m.LeagueListPageModule)
          },
          {
            path: 'create',
            loadChildren: () => import('./league/league-create/league-create.module').then(m => m.LeagueCreatePageModule)
          },
          {
            path: 'edit/:leagueId',
            loadChildren: () => import('./league/league-edit/league-edit.module').then(m => m.LeagueEditPageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: 'app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  },  { path: 'match-schedule-list', loadChildren: './match-schedule/match-schedule-list/match-schedule-list.module#MatchScheduleListPageModule' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

