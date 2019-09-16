import { Component, OnInit } from '@angular/core';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { Router } from '@angular/router';
import * as mutations from '../../../../graphql/mutations';
import { CreateLeagueInput } from 'src/API';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-league-create',
  templateUrl: './league-create.page.html',
  styleUrls: ['./league-create.page.scss'],
})
export class LeagueCreatePage implements OnInit {

  public league: { name: string } = { name: null };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async processForm() {

    try {
      const createLeagueInput: CreateLeagueInput = { name: this.league.name, leagueClubId: environment.clubId, active: true };
      await API.graphql(graphqlOperation(mutations.createLeague, { input: createLeagueInput }));
      return this.router.navigate(['/league']);
    } catch (err) {
      console.log(err);
    }
  }
}
