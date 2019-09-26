import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { UpdateLeagueInput } from 'src/API';
import * as mutations from '../../../../../graphql/mutations';
import * as queries from '../../../../../graphql/queries';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-league-edit',
  templateUrl: './league-edit.page.html',
  styleUrls: ['./league-edit.page.scss'],
})
export class LeagueEditPage implements OnInit {

  public league: { id: string, name: string } = { id: null, name: null };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    const leagueId = this.route.snapshot.paramMap.get('leagueId');
    this.loadLeague(leagueId);
  }


  async loadLeague(leagueId) {
    const leagueData = await API.graphql(graphqlOperation(queries.getLeague, { id: leagueId }));

    if (leagueData) {
      this.league = leagueData.data.getLeague;
    }
  }

  async processForm() {
    try {
      const updateLeagueInput: UpdateLeagueInput = { id: this.league.id, name: this.league.name };
      await API.graphql(graphqlOperation(mutations.updateLeague, { input: updateLeagueInput }));
      return this.router.navigate(['/admin/league']);
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
    await API.graphql(graphqlOperation(mutations.updateLeague, { input: leagueInput }));
    return this.router.navigate(['/admin/league']);
  }
}
