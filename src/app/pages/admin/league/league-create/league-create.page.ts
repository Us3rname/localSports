import { Component, OnInit } from '@angular/core';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { Router } from '@angular/router';
import * as mutations from '../../../../../graphql/mutations';
import { CreateLeagueInput, CreateLeagueInfoInput } from 'src/API';
import { environment } from '../../../../../environments/environment';
import { GraphqlRequestService } from '../../../../services/graphql-request.service';
import { LeagueDataService } from 'src/app/services/league-data.service';

@Component({
  selector: 'app-league-create',
  templateUrl: './league-create.page.html',
  styleUrls: ['./league-create.page.scss'],
})
export class LeagueCreatePage implements OnInit {

  public league: { name: string, ranking: number, maxTeams: number };
  private initialLeagueState = { name: null, ranking: null, maxTeams: 5 };

  constructor(private router: Router, private leagueDataService: LeagueDataService) {
    this.league = this.initialLeagueState;
  }

  ngOnInit() {
  }

  async processForm() {

    try {

      const createLeagueInfoInput: CreateLeagueInfoInput = {
        name: this.league.name, ranking: this.league.ranking, maxTeams: this.league.maxTeams
      };

      // leagueLeagueInfoId will be set in the function createCompletelyNewLeague because there we will save the leagueinfo.
      const createLeagueInput: CreateLeagueInput = {
        leagueLeagueInfoId: null, leagueClubId: environment.clubId
      };

      const league = this.leagueDataService.createCompletelyNewLeague(createLeagueInfoInput, createLeagueInput);
      if (league !== null) {
        return this.router.navigate(['/admin/league']);
      } else {

      }
    } catch (err) {
      console.log(err);
    }
  }

}
