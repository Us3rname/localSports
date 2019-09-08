import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RankingPage } from './ranking.page';
import { RankingPageRoutingModule } from './ranking-routing.module';
import { ComponentsModule, } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RankingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RankingPage]
})
export class RankingModule { }
