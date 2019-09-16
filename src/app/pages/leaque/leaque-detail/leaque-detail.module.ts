import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeaqueDetailPage } from './leaque-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LeaqueDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeaqueDetailPage]
})
export class LeaqueDetailPageModule {}
