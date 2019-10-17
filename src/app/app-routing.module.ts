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
  {
    path: 'match-schedule', children: [
      {
        path: '',
        loadChildren: () => import('./pages/match-schedule/match-schedule-list/match-schedule-list.module')
          .then(m => m.MatchScheduleListPageModule)
      },
      {
        path: 'create',
        loadChildren: () => import('./pages/match-schedule/match-schedule-create/match-schedule-create.module')
          .then(m => m.MatchScheduleCreatePageModule)
      },
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
