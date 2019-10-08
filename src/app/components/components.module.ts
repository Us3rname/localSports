import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { BackHeaderComponent } from './back-header/back-header.component';
import { LeagueHeaderComponent } from './teams/league-header/league-header.component';
import { TeamListComponent } from './teams/team-list/team-list.component';

import { RefereeFormComponent } from './referee-form/referee-form.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuHeaderComponent, RefereeFormComponent, BackHeaderComponent, LeagueHeaderComponent,
    TeamListComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    MenuHeaderComponent, RefereeFormComponent, BackHeaderComponent, LeagueHeaderComponent,
    TeamListComponent
  ]
})
export class ComponentsModule { }
