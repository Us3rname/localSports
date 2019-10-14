import { Component, Input } from '@angular/core';

import { PopoverController, ModalController } from '@ionic/angular';
import { SubmitScorePage } from './submit-score.page';
@Component({
  template: `
    <ion-list>
      <ion-item button (click)="presentModal()">
        <ion-label>Submit score</ion-label>
      </ion-item>
    </ion-list>
  `
})
export class GameActionMenuPage {

  @Input() game;

  constructor(public popoverCtrl: PopoverController, private modalController: ModalController) { }

  support() {
    // this.app.getRootNavs()[0].push('/support');
    this.popoverCtrl.dismiss();
  }

  async presentModal(event) {
    console.log(this.game);
    const modal = await this.modalController.create({
      component: SubmitScorePage,
      componentProps: {
        game: this.game
      }
    });
    this.popoverCtrl.dismiss();
    return await modal.present();
  }
}
