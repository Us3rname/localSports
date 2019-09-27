import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private color = 'primary';

  constructor(
    public toastController: ToastController
  ) { }

  presentSuccessToast(message: string) {
    this.color = 'success';
    this.presentToast(message);
  }

  presentWarningToast(message: string) {
    this.color = 'warning';
    this.presentToast(message);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: this.color,
    });
    toast.present();
  }
}
