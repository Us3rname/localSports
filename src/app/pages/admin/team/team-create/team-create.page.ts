import { Component, OnInit } from '@angular/core';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../../../../graphql/mutations';
import * as queries from '../../../../../graphql/queries';
import { environment } from '../../../../../environments/environment';
import { LeagueDataService } from '../../../../services/league-data.service';
import { GRAPHQL_AUTH_MODE } from '../../../../../../node_modules/@aws-amplify/api/lib/types/index';

import { Router } from '@angular/router';
import { CreateTeamInput } from '../../../../../API';
@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.page.html',
  styleUrls: ['./team-create.page.scss'],
})
export class TeamCreatePage implements OnInit {

  defaultHref: '';
  team: CreateTeamInput;
  initialTeamState = {
    name: null, contact: null, teamLeagueId: null, active: true, lastUpdated: new Date().toJSON(), teamClubId: environment.clubId
  };
  leagues = new Array();

  constructor(private router: Router, private leagueDataService: LeagueDataService) {
    this.team = this.initialTeamState;
  }

  ngOnInit() {
    this.loadLeagues();
  }

  async loadLeagues() {
    this.leagues = await this.leagueDataService.getActiveLeagues();
    console.log(this.leagues);
  }

  async processForm() {

    try {
      await API.graphql({
        query: mutations.createTeam,
        variables: { input: this.team },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });

      return this.router.navigate(['/admin/team']);
    } catch (err) {
      console.log(err);
    }
  }
}
