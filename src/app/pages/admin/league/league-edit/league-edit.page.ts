import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { UpdateLeagueInput } from 'src/API';
import * as mutations from '../../../../../graphql/mutations';
import * as queries from '../../../../../graphql/queries';
import { AlertController } from '@ionic/angular';
import { ToastService } from '../../../../services/toast.service';
import { GraphqlRequestService } from '../../../../services/graphql-request.service';

@Component({
  selector: 'app-league-edit',
  templateUrl: './league-edit.page.html',
  styleUrls: ['./league-edit.page.scss'],
})
export class LeagueEditPage implements OnInit {

  public league: any;
  initialStateLeague = { id: null, name: null };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public alertController: AlertController,
    public toastService: ToastService,
    public graphqlRequestService: GraphqlRequestService
  ) {
    this.league = this.initialStateLeague;
  }

  ngOnInit() {
    const leagueId = this.route.snapshot.paramMap.get('leagueId');
    this.loadLeague(leagueId);
  }

  async loadLeague(leagueId) {

    await this.graphqlRequestService.doPrivateQuery('getLeague', { id: leagueId });

    if (this.graphqlRequestService.isSuccessfull) {
      this.league = this.graphqlRequestService.data;
    } else {
      this.toastService.presentWarningToast('Divisie kon niet gevonden worden.');
      return this.router.navigate(['/admin/league']);
    }
  }

  async processForm() {
    try {
      const updateLeagueInput: UpdateLeagueInput = { id: this.league.id, name: this.league.name };
      await this.graphqlRequestService.doPrivateMutation('updateLeague', { input: updateLeagueInput });

      if (this.graphqlRequestService.isSuccessfull) {
        return this.router.navigate(['/admin/league']);
      }

    } catch (err) {
      console.log(err);
    }
  }

  async presentDeleteAlertConfirm(league) {
    const alert = await this.alertController.create({
      header: 'Waarschuwing!',
      message: 'Weet u zeker dat u de divisie wil verwijderen?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Okay',
          cssClass: 'danger',
          handler: () => {
            this.deleteLeague(league);
          }
        }
      ]
    });

    await alert.present();
  }

  async deleteLeague(league) {
    const id = league.id;
    const leagueInput: UpdateLeagueInput = { id, active: false, deletedAt: new Date().toJSON(), lastUpdated: new Date().toJSON() };
    await this.graphqlRequestService.doPrivateMutation('updateLeague', { input: leagueInput });

    if (this.graphqlRequestService.isSuccessfull) {
      return this.router.navigate(['/admin/league']);
    }
  }
}
