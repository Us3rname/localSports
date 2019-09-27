import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app/tabs/schedule',
    pathMatch: 'full'
  },
  {
    path: 'app',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule)
  },
  {
    path: 'admin',
    children: [
      {
        path: 'team', children: [
          {
            path: '',
            loadChildren: () => import('./pages/admin/team/team-list/team-list.module').then(m => m.TeamListPageModule)
          },
          {
            path: 'create',
            loadChildren: () => import('./pages/admin/team/team-create/team-create.module').then(m => m.TeamCreatePageModule)
          },
          {
            path: 'edit/:teamId',
            loadChildren: () => import('./pages/admin/team/team-edit/team-edit.module').then(m => m.TeamEditPageModule)
          },
        ]
      },
      {
        path: 'league', children: [
          {
            path: '',
            loadChildren: () => import('./pages/admin/league/league-list/league-list.module').then(m => m.LeagueListPageModule)
          },
          {
            path: 'create',
            loadChildren: () => import('./pages/admin/league/league-create/league-create.module').then(m => m.LeagueCreatePageModule)
          },
          {
            path: 'edit/:leagueId',
            loadChildren: () => import('./pages/admin/league/league-edit/league-edit.module').then(m => m.LeagueEditPageModule)
          },
        ]
      },
      {
        path: 'sports-hall', children: [
          {
            path: '',
            loadChildren: () => import('./pages/admin/sports-hall/sports-hall-list/sports-hall-list.module')
              .then(m => m.SportsHallListPageModule)
          },
          {
            path: 'create',
            loadChildren: () => import('./pages/admin/sports-hall/sports-hall-create/sports-hall-create.module')
              .then(m => m.SportsHallCreatePageModule)
          },
          {
            path: 'edit/:sportsHallId',
            loadChildren: () => import('./pages/admin/sports-hall/sports-hall-edit/sports-hall-edit.module')
              .then(m => m.SportsHallEditPageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: 'app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'logout', loadChildren: './pages/logout/logout.module#LogoutPageModule' },
  {
    path: 'team', children: [
      {
        path: '',
        loadChildren: () => import('./pages/team/team-list/team-list.module').then(m => m.TeamListPageModule)
      },
    ]
  },
  {
    path: 'club', children: [
      {
        path: '',
        loadChildren: () => import('./pages/club/club-list/club-list.module').then(m => m.ClubListPageModule)
      },
      {
        path: 'create',
        loadChildren: () => import('./pages/club/club-create/club-create.module').then(m => m.ClubCreatePageModule)
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
