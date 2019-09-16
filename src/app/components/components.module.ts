import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MenuHeaderComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [MenuHeaderComponent]
})
export class ComponentsModule { }
