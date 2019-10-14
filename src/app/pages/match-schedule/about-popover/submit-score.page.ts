import { Component, Input } from '@angular/core';

import { PopoverController, ModalController } from '@ionic/angular';

@Component({
  templateUrl: './submit-score.page.html',
})
export class SubmitScorePage {

  @Input() game;

  constructor(public modalCtrl: ModalController) { }


  dismissModal() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}
