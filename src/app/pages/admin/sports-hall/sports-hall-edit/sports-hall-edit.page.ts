import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../../services/toast.service';
import { GraphqlRequestService } from '../../../../services/graphql-request.service';
import { SporthallService } from '../../../../services/sporthall.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateSportsHallInput, UpdateHallInput, CreateHallInput } from 'src/API';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-sports-hall-edit',
  templateUrl: './sports-hall-edit.page.html',
  styleUrls: ['./sports-hall-edit.page.scss'],
})
export class SportsHallEditPage implements OnInit {

  public sportsHall: {
    name: string, street: string, zipCode: string, city: string, phone: string, streetNumber: number,
    halls: { items: [{ id: string }] }
  };
  private initialSportsHallState = {
    name: null, street: null, zipCode: null, city: null, phone: null, streetNumber: null, halls: null
  };

  private sportsHallId;

  constructor(
    private graphqlRequestService: GraphqlRequestService,
    public toastService: ToastService,
    private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController,
    public sporthallService: SporthallService
  ) {
    this.sportsHall = this.initialSportsHallState;
    this.sportsHallId = this.route.snapshot.paramMap.get('sportsHallId');
  }

  ngOnInit() {
    this.loadSportsHall();
  }

  private async loadSportsHall() {

    await this.graphqlRequestService.doPrivateQuery('getSportsHall', { id: this.sportsHallId });

    if (this.graphqlRequestService.isSuccessfull) {
      this.sportsHall = this.graphqlRequestService.data;
      this.sporthallService.halls = this.sportsHall.halls.items;

      this.sportsHall.halls.items.map((hall) => {
        this.sporthallService.existingHalls[hall.id] = hall;
      });
    } else {
      this.toastService.presentWarningToast('Sporthal kon niet gevonden worden.');
      return this.router.navigate(['/admin/sports-hall']);
    }
  }

  async processForm() {
    const updateSportsHallInput: UpdateSportsHallInput = {
      id: this.sportsHallId, name: this.sportsHall.name, street: this.sportsHall.street,
      zipCode: this.sportsHall.zipCode, city: this.sportsHall.city, phone: this.sportsHall.phone,
      streetNumber: this.sportsHall.streetNumber
    };

    await this.graphqlRequestService.doPrivateMutation('updateSportsHall', { input: updateSportsHallInput });

    if (this.graphqlRequestService.isSuccessfull) {
      this.sporthallService.updateHalls(this.sportsHallId);
      this.toastService.presentSuccessToast('Sporthal is bijgewerkt.');
      return this.router.navigate(['/admin/sports-hall']);
    } else {

    }
  }


  async presentDeleteAlertConfirm(sportsHall) {
    const alert = await this.alertController.create({
      header: 'Waarschuwing!',
      message: 'Weet u zeker dat u de sporthal wilt verwijderen?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Okay',
          cssClass: 'danger',
          handler: () => {
            this.deleteSportsHall(sportsHall);
          }
        }
      ]
    });

    await alert.present();
  }

  async deleteSportsHall(sportsHall) {
    const sportsHallInput: UpdateSportsHallInput = { id: sportsHall.id };
    await this.graphqlRequestService.doPrivateMutation('updateSportsHall', { input: sportsHallInput });

    if (this.graphqlRequestService.isSuccessfull) {
      return this.router.navigate(['/admin/sports-hall']);
    }
  }

  addEmptyHall() {
    this.sporthallService.addEmptyHall();
  }

  removeHall(index, hallId) {
    this.sporthallService.removeHall(index, hallId);
  }
}
