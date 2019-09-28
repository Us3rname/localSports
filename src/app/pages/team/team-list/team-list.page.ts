import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../../graphql/queries';
import { GRAPHQL_AUTH_MODE } from '../../../../../node_modules/@aws-amplify/api/lib/types/index';
import { ToastService } from '../../../services/toast.service';
import { LeagueDataService } from '../../../services/league-data.service';
import { GraphqlRequestService } from '../../../services/graphql-request.service';

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

  }

  async loadTeams() {

    await this.graphqlRequestService.doPublicQuery('listTeams', { filter: { active: { eq: true } } });

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
      this.teamsPerLeague[league.id] = [];
    });

    this.allTeams.map((team) => {
      if (team.league.active) {
        this.teamsPerLeague[team.league.id].push(team);
      } else {
        console.log('Team has an inactive league.');
      }
    });

    this.shownTeams = this.teamsPerLeague[this.selectedLeagueId];
  }

  changeTeams(event) {
    this.selectedLeagueId = event.detail.value;
    this.shownTeams = this.teamsPerLeague[this.selectedLeagueId];
  }
}
