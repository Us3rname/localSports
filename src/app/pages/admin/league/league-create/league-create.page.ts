import { Component, OnInit } from '@angular/core';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { Router } from '@angular/router';
import * as mutations from '../../../../../graphql/mutations';
import { CreateLeagueInput } from 'src/API';
import { environment } from '../../../../../environments/environment';
import { GraphqlRequestService } from '../../../../services/graphql-request.service';

@Component({
  selector: 'app-league-create',
  templateUrl: './league-create.page.html',
  styleUrls: ['./league-create.page.scss'],
})
export class LeagueCreatePage implements OnInit {

  public league: { name: string, ranking: number };
  private initialLeagueState = { name: null, ranking: null };

  constructor(private router: Router, private graphqlRequestService: GraphqlRequestService) {
    this.league = this.initialLeagueState;
  }

  ngOnInit() {
  }

  async processForm() {

    try {
      const createLeagueInput: CreateLeagueInput = {
        name: this.league.name, leagueClubId: environment.clubId, active: true, ranking: this.league.ranking
      };

      await this.graphqlRequestService.doPrivateMutation('createLeague', { input: createLeagueInput });

      if (this.graphqlRequestService.isSuccessfull) {
        return this.router.navigate(['/admin/league']);
      } else {

      }
    } catch (err) {
      console.log(err);
    }
  }
}
