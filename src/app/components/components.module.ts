import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { BackHeaderComponent } from './back-header/back-header.component';
import { LeagueHeaderComponent } from './teams/league-header/league-header.component';
import { TeamListComponent } from './teams/team-list/team-list.component';

import { RefereeFormComponent } from './referee-form/referee-form.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputErrorComponent } from './forms/input-error/input-error.component';
import { CreateGameFormComponent } from './match-schedule/create-game-form/create-game-form.component';
import { DeleteButtonComponent } from './forms/delete-button/delete-button.component';
import { SubmitButtonComponent } from './forms/submit-button/submit-button.component';
import { TextAvatarModule } from './text-avatar';

@NgModule({
  declarations: [
    MenuHeaderComponent, RefereeFormComponent, BackHeaderComponent, LeagueHeaderComponent,
    TeamListComponent, InputErrorComponent, CreateGameFormComponent, DeleteButtonComponent, SubmitButtonComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TextAvatarModule,
    ReactiveFormsModule
  ],
  exports: [
    MenuHeaderComponent, RefereeFormComponent, BackHeaderComponent, LeagueHeaderComponent,
    TeamListComponent, InputErrorComponent, CreateGameFormComponent, DeleteButtonComponent, SubmitButtonComponent
  ]
})
export class ComponentsModule { }
