import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../../graphql/queries';
import * as mutations from '../../../../graphql/mutations';
import { UpdateTeamInput } from '../../../../API';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.page.html',
  styleUrls: ['./team-edit.page.scss'],
})
export class TeamEditPage implements OnInit {

  public team = { id: null, name: null, contact: null, division: null, active: true, lastUpdated: null };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {

    const teamId = this.route.snapshot.paramMap.get('teamId');
    this.loadTeam(teamId);

  }

  async processForm() {
    console.log(this.team);
    try {
      const updateTeamInput: UpdateTeamInput = { id: this.team.id, name: this.team.name, contact: this.team.contact };
      console.log(updateTeamInput);
      await API.graphql(graphqlOperation(mutations.updateTeam, { input: updateTeamInput }));
      return this.router.navigate(['/team']);
    } catch (err) {
      console.log(err);
    }
  }

  async loadTeam(teamId) {
    const teamData = await API.graphql(graphqlOperation(queries.getTeam, { id: teamId }));

    if (teamData) {
      this.team = teamData.data.getTeam;
    }
  }

  async presentDeleteAlertConfirm(team) {
    const alert = await this.alertController.create({
      header: 'Waarschuwing!',
      message: 'Weet u zeker dat u het team wil verwijderen?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Okay',
          cssClass: 'danger',
          handler: () => {
            this.deleteTeam(team);
          }
        }
      ]
    });

    await alert.present();
  }

  async deleteTeam(team) {
    const id = team.id;
    const teamInput: UpdateTeamInput = { id, active: false, deletedAt: new Date().toJSON(), lastUpdated: new Date().toJSON() };
    await API.graphql(graphqlOperation(mutations.updateTeam, { input: teamInput }));
    return this.router.navigate(['/team']);
  }
}
