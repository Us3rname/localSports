import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SportsHallListPage } from './sports-hall-list.page';

const routes: Routes = [
  {
    path: '',
    component: SportsHallListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SportsHallListPage]
})
export class SportsHallListPageModule {}
