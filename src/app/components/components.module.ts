import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { BackHeaderComponent } from './back-header/back-header.component';

import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MenuHeaderComponent, BackHeaderComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [MenuHeaderComponent, BackHeaderComponent]
})
export class ComponentsModule { }
