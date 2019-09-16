import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../../graphql/queries';
import * as subscriptions from '../../../../graphql/subscriptions';

import { ToastService } from '../../../services/toast.service';
@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.page.html',
  styleUrls: ['./team-list.page.scss'],
})
export class TeamListPage implements OnInit {

  public teams = new Array();

  constructor(
    private router: Router,
    public toastService: ToastService,
  ) { }

  ngOnInit() {
    this.loadTeams();
    this.subscribeOnCreateTeam();
    this.subscribeOnUpdateTeam();

  }

  subscribeOnCreateTeam() {
    // Subscribe for new teams when they create it through the app.
    API.graphql(
      graphqlOperation(subscriptions.onCreateTeam)
    ).subscribe({
      next: (teamData) => {
        this.teams.push(teamData.value.data.onCreateTeam);
        this.toastService.presentToast('Team is aangemaakt.');
      }
    });
  }

  subscribeOnUpdateTeam() {
    API.graphql(
      graphqlOperation(subscriptions.onUpdateTeam)
    ).subscribe({
      next: (teamData) => {
        this.updateLocalTeams(teamData);
      }
    });
  }

  updateLocalTeams(teamData) {
    const team = teamData.value.data.onUpdateTeam;
    for (let i = 0; i < this.teams.length; i++) {
      if (this.teams[i].id === team.id) {
        if (team.active === false) {
          this.teams.splice(i, 1);
          this.toastService.presentToast('Team is verwijderd');
          return;
        } else {
          this.teams[i] = team;
          this.toastService.presentToast('Team is bijgewerkt');
          return;
        }
      }
    }
  }

  async loadTeams() {
    const allTeams = await API.graphql(graphqlOperation(queries.listTeams, { filter: { active: { eq: true } } }));

    if (allTeams) {
      this.teams = allTeams.data.listTeams.items;
    }
  }

  goToTeamCreatePage(event) {
    return this.router.navigate(['/team/create']);
  }

  goToTeamEditPage(id) {
    this.router.navigate(['/team/edit/' + id]);
  }
}
