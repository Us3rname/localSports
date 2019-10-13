import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SportsHallCreatePage } from './sports-hall-create.page';

const routes: Routes = [
  {
    path: '',
    component: SportsHallCreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SportsHallCreatePage]
})
export class SportsHallCreatePageModule {}
