import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as subscriptions from '../../../../../graphql/subscriptions';
import { ToastService } from '../../../../services/toast.service';
import { LeagueDataService } from '../../../../services/league-data.service';
import { GraphqlRequestService } from '../../../../services/graphql-request.service';

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
    private leagueDataService: LeagueDataService,
    private graphqlRequestService: GraphqlRequestService
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
        this.updateTeamsAfterCreate(teamData.value.data.onCreateTeam);
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
    for (let i = 0; i < this.teamsPerLeague[this.selectedLeagueId].length; i++) {
      if (this.teamsPerLeague[this.selectedLeagueId][i].id === team.id) {
        if (team.active === false) {
          this.teamsPerLeague[this.selectedLeagueId].splice(i, 1);
          this.toastService.presentToast('Team is verwijderd');
          return;
        } else {
          this.teamsPerLeague[this.selectedLeagueId][i] = team;
          this.toastService.presentToast('Team is bijgewerkt');
          return;
        }
      }
    }
  }

  async loadTeams() {

    await this.graphqlRequestService.doPrivateQuery(
      'listTeams', { filter: { active: { eq: true } } }
    );

    if (this.graphqlRequestService.isSuccessfull) {
      this.allTeams = this.graphqlRequestService.data.items;
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
      this.teamsPerLeague[league.id] = new Array();
    });

    this.allTeams.map((team) => {
      if (!this.teamsPerLeague[team.league.id]) {
        this.teamsPerLeague[team.league.id] = new Array();
      }
      this.teamsPerLeague[team.league.id].push(team);
    });

    this.shownTeams = this.teamsPerLeague[this.selectedLeagueId];
  }

  updateTeamsAfterCreate(team) {

    if (!this.teamsPerLeague[team.league.id]) {
      this.teamsPerLeague[team.league.id] = new Array();
    }

    this.teamsPerLeague[team.league.id].push(team);
    this.allTeams.push(team);
    this.toastService.presentToast('Team is aangemaakt.');
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
