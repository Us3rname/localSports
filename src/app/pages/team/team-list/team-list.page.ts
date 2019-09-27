import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../../graphql/queries';
import { GRAPHQL_AUTH_MODE } from '../../../../../node_modules/@aws-amplify/api/lib/types/index';
import { ToastService } from '../../../services/toast.service';
import { LeagueDataService } from '../../../services/league-data.service';

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
}
