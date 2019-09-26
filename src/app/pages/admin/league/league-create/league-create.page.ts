import { Component, OnInit } from '@angular/core';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { Router } from '@angular/router';
import * as mutations from '../../../../../graphql/mutations';
import { CreateLeagueInput } from 'src/API';
import { environment } from '../../../../../environments/environment';
import { GRAPHQL_AUTH_MODE } from '../../../../../../node_modules/@aws-amplify/api/lib/types/index';

@Component({
  selector: 'app-league-create',
  templateUrl: './league-create.page.html',
  styleUrls: ['./league-create.page.scss'],
})
export class LeagueCreatePage implements OnInit {

  public league: { name: string, ranking: number };
  private initialLeagueState = { name: null, ranking: null };

  constructor(private router: Router) {
    this.league = this.initialLeagueState;
  }

  ngOnInit() {
  }

  async processForm() {

    try {
      const createLeagueInput: CreateLeagueInput = {
        name: this.league.name, leagueClubId: environment.clubId, active: true, ranking: this.league.ranking
      };

      const response = await API.graphql({
        query: mutations.createLeague,
        variables: { input: createLeagueInput },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });

      if (response.errors != null && response.errors.length > 0) {

      } else {
        return this.router.navigate(['/admin/league']);
      }
    } catch (err) {
      console.log(err);
    }
  }
}
