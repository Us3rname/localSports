import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RefereeCreatePage } from './referee-create.page';
import { ComponentsModule } from '../../../../components/components.module';
const routes: Routes = [
  {
    path: '',
    component: RefereeCreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RefereeCreatePage]
})
export class RefereeCreatePageModule { }
