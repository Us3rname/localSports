import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../../../graphql/queries';
import * as mutations from '../../../../../graphql/mutations';
import { UpdateTeamInput } from '../../../../../API';
import { AlertController } from '@ionic/angular';
import { environment } from '../../../../../environments/environment';
import { LeagueDataService } from '../../../../services/league-data.service';
import { GraphqlRequestService } from '../../../../services/graphql-request.service';
import { ToastService } from '../../../../services/toast.service';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.page.html',
  styleUrls: ['./team-edit.page.scss'],
})
export class TeamEditPage implements OnInit {

  public team = {
    id: null, name: null, contact: null, teamLeagueId: null,
    active: true, lastUpdated: new Date().toJSON(), teamClubId: environment.clubId
  };
  leagues = new Array();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public alertController: AlertController,
    private leagueDataService: LeagueDataService,
    private graphqlRequestService: GraphqlRequestService,
    public toastService: ToastService
  ) { }

  ngOnInit() {
    this.loadLeagues();
    const teamId = this.route.snapshot.paramMap.get('teamId');
    this.loadTeam(teamId);
  }

  async loadLeagues() {
    this.leagues = await this.leagueDataService.getActiveLeagues();
  }

  async processForm() {
    try {
      const updateTeamInput: UpdateTeamInput = {
        id: this.team.id, teamLeagueId: this.team.teamLeagueId, name: this.team.name, contact: this.team.contact
      };
      await this.graphqlRequestService.doPrivateMutation('updateTeam', { input: updateTeamInput });

      if (this.graphqlRequestService.isSuccessfull) {
        this.toastService.presentSuccessToast('Team is bijgewerkt.');
        return this.router.navigate(['/admin/team']);
      }

    } catch (err) {
      console.log(err);
    }
  }

  async loadTeam(teamId) {
    await this.graphqlRequestService.doPrivateQuery('getTeam', { id: teamId });

    if (this.graphqlRequestService.isSuccessfull) {
      this.team = this.graphqlRequestService.data;
    } else {
      this.toastService.presentWarningToast('Team kon niet worden gevonden.');
      return this.router.navigate(['/admin/team']);
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
    return this.router.navigate(['/admin/team']);
  }
}
