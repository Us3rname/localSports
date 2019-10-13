import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as subscriptions from '../../../../../graphql/subscriptions';
import { ToastService } from '../../../../services/toast.service';
import { LeagueDataService } from '../../../../services/league-data.service';
import { GraphqlRequestService } from '../../../../services/graphql-request.service';

@Component({
  selector: 'app-admin-team-list',
  templateUrl: './team-list.page.html',
  styleUrls: ['./team-list.page.scss'],
})
export class TeamListPage implements OnInit {

  public allTeams = new Array();
  public leagues = new Array();
  public teamsPerLeague = new Array();
  public selectedLeagueId;
  public shownTeams;
  isLoading = true;
  loadingItems = Array(5);
  message;

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

  }

  goToTeamCreatePage(event) {
    return this.router.navigate(['/admin/team/create']);
  }

  onTeamSelected(team) {
    this.router.navigate(['/admin/team/edit/' + team.id]);
  }
}
