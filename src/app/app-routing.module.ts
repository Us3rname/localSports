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
        loadChildren: () => import('./pages/team/team-detail/team-detail.module').then(m => m.TeamDetailPageModule)
      },
    ]
  },
  {
    path: 'leaque', children: [
      {
        path: '',
        loadChildren: () => import('./pages/leaque/leaque-list/leaque-list.module').then(m => m.LeaqueListPageModule)
      },
      {
        path: 'create',
        loadChildren: () => import('./pages/leaque/leaque-create/leaque-create.module').then(m => m.LeaqueCreatePageModule)
      },
      {
        path: 'edit/:leaqueId',
        loadChildren: () => import('./pages/leaque/leaque-detail/leaque-detail.module').then(m => m.LeaqueDetailPageModule)
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
