import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
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
      {
        path: 'create',
        loadChildren: () => import('./pages/team/team-create/team-create.module').then(m => m.TeamCreatePageModule)
      },
      {
        path: 'edit/:teamId',
        loadChildren: () => import('./pages/team/team-edit/team-edit.module').then(m => m.TeamEditPageModule)
      },
    ]
  },
  {
    path: 'league', children: [
      {
        path: '',
        loadChildren: () => import('./pages/league/league-list/league-list.module').then(m => m.LeagueListPageModule)
      },
      {
        path: 'create',
        loadChildren: () => import('./pages/league/league-create/league-create.module').then(m => m.LeagueCreatePageModule)
      },
      {
        path: 'edit/:leagueId',
        loadChildren: () => import('./pages/league/league-edit/league-edit.module').then(m => m.LeagueEditPageModule)
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
