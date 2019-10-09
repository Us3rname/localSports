import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../../../../graphql/mutations';
import { UpdateTeamInput, DeleteTeamInput } from '../../../../../API';
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
    id: null, name: null, contact: null, teamLeagueId: null, teamClubId: environment.clubId, league: { id: null, ranking: null }
  };
  leagues = new Array();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public alertController: AlertController,
    private leagueDataService: LeagueDataService,
    private graphqlRequestService: GraphqlRequestService,
    public toastService: ToastService
  ) {

  }

  ngOnInit() {
    const teamId = this.route.snapshot.paramMap.get('teamId');
    this.loadLeagues().then(() =>
      this.loadTeam(teamId)
    );
  }

  async loadLeagues() {
    this.leagues = await this.leagueDataService.getLeagues();
  }

  async processForm() {
    try {
      const updateTeamInput: UpdateTeamInput = {
        id: this.team.id, leagueId: this.team.league.id, teamLeagueId: this.team.league.id, name: this.team.name, contact: this.team.contact
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
      console.log(this.team);
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
    const teamInput: DeleteTeamInput = { id: team.id };
    await API.graphql(graphqlOperation(mutations.deleteTeam, { input: teamInput }));
    return this.router.navigate(['/admin/team']);
  }
}
