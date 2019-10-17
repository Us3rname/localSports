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
        path: 'referee', children: [
          {
            path: 'edit/:refereeId',
            loadChildren: () => import('./referee/referee-edit/referee-edit.module')
              .then(m => m.RefereeEditPageModule)
          },
          {
            path: 'create',
            loadChildren: () => import('./referee/referee-create/referee-create.module')
              .then(m => m.RefereeCreatePageModule)
          },
          {
            path: '', loadChildren: () => import('./referee/referee-list/referee-list.module')
              .then(m => m.RefereeListPageModule)
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
        path: 'sports-hall', children: [
          {
            path: '',
            loadChildren: () => import('./sports-hall/sports-hall-list/sports-hall-list.module')
              .then(m => m.SportsHallListPageModule)
          },
          {
            path: 'create',
            loadChildren: () => import('./sports-hall/sports-hall-create/sports-hall-create.module')
              .then(m => m.SportsHallCreatePageModule)
          },
          {
            path: 'edit/:sportsHallId',
            loadChildren: () => import('./sports-hall/sports-hall-edit/sports-hall-edit.module')
              .then(m => m.SportsHallEditPageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: 'app/tabs/schedule',
        pathMatch: 'full'
      },
      {
        path: 'season', children: [
          {
            path: '',
            loadChildren: () => import('./season/season-list/season-list.module').then(m => m.SeasonListPageModule)
          },
          {
            path: 'create',
            loadChildren: () => import('./season/season-create/season-create.module').then(m => m.SeasonCreatePageModule)
          },
          {
            path: 'edit/:seasonId',
            loadChildren: () => import('./season/season-edit/season-edit.module').then(m => m.SeasonEditPageModule)
          },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

