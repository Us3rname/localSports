import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../../../graphql/queries';
import * as subscriptions from '../../../../../graphql/subscriptions';
import { GRAPHQL_AUTH_MODE } from '../../../../../../node_modules/@aws-amplify/api/lib/types/index';
import { ToastService } from '../../../../services/toast.service';
import { LeagueDataService } from '../../../../services/league-data.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.page.html',
  styleUrls: ['./team-list.page.scss'],
})
export class TeamListPage implements OnInit {

  public allTeams = new Array();
  public leagues = new Array();
  public teamsPerLeague = new Array();
  public selectedLeagueId;
  public shownTeams;

  constructor(
    private router: Router,
    public toastService: ToastService,
    private leagueDataService: LeagueDataService
  ) {
    this.selectedLeagueId = null;
    this.shownTeams = new Array();
    this.leagues = new Array();
    this.allTeams = new Array();
    this.teamsPerLeague = new Array();
  }

  ngOnInit() {

    this.loadAllLeagues().then(() =>
      this.loadTeams().then(() =>
        this.assignTeamsToLeague()
      )
    );

    this.subscribeOnCreateTeam();
    this.subscribeOnUpdateTeam();
  }

  private subscribeOnCreateTeam() {
    // Subscribe for new teams when they create it through the app.
    API.graphql(
      graphqlOperation(subscriptions.onCreateTeam)
    ).subscribe({
      next: (teamData) => {
        this.allTeams.push(teamData.value.data.onCreateTeam);
        this.toastService.presentToast('Team is aangemaakt.');
      }
    });
  }

  private subscribeOnUpdateTeam() {
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
    for (let i = 0; i < this.allTeams.length; i++) {
      if (this.allTeams[i].id === team.id) {
        if (team.active === false) {
          this.allTeams.splice(i, 1);
          this.toastService.presentToast('Team is verwijderd');
          return;
        } else {
          this.allTeams[i] = team;
          this.toastService.presentToast('Team is bijgewerkt');
          return;
        }
      }
    }
  }

  async loadTeams() {

    const allTeams = await API.graphql({
      query: queries.listTeams,
      variables: { filter: { active: { eq: true } } },
      authMode: GRAPHQL_AUTH_MODE.API_KEY
    });

    if (allTeams) {
      this.allTeams = allTeams.data.listTeams.items;
    }
  }

  async loadAllLeagues() {
    this.leagues = await this.leagueDataService.getActiveLeagues();
  }

  assignTeamsToLeague() {
    this.leagues.map((league) => {

      if (this.selectedLeagueId == null) {
        this.selectedLeagueId = league.id;
      }
      this.teamsPerLeague[league.id] = [];
    });

    this.allTeams.map((team) => {
      this.teamsPerLeague[team.league.id].push(team);
    });

    this.shownTeams = this.teamsPerLeague[this.selectedLeagueId];
  }

  changeTeams(event) {
    this.selectedLeagueId = event.detail.value;
    this.shownTeams = this.teamsPerLeague[this.selectedLeagueId];
  }

  goToTeamCreatePage(event) {
    return this.router.navigate(['/admin/team/create']);
  }

  goToTeamEditPage(id) {
    this.router.navigate(['/admin/team/edit/' + id]);
  }
}
