import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SportsHallEditPage } from './sports-hall-edit.page';

const routes: Routes = [
  {
    path: '',
    component: SportsHallEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SportsHallEditPage]
})
export class SportsHallEditPageModule {}
