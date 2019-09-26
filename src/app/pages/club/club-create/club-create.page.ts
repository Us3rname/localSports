import { Component, OnInit } from '@angular/core';
import * as mutations from '../../../../graphql/mutations';
import { CreateLeagueInput, CreateClubInput } from 'src/API';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { Router } from '@angular/router';
import { GRAPHQL_AUTH_MODE } from '../../../../../node_modules/@aws-amplify/api/lib/types/index';

@Component({
  selector: 'app-club-create',
  templateUrl: './club-create.page.html',
  styleUrls: ['./club-create.page.scss'],
})
export class ClubCreatePage implements OnInit {

  public club: { name: string, contact: string, country: string };
  private initialLeagueState = { name: null, contact: null, country: null };

  constructor(private router: Router) {
    this.club = this.initialLeagueState;
  }

  ngOnInit() {
  }

  async processForm() {

    try {
      const createClubInput: CreateClubInput = {
        name: this.club.name, contact: this.club.contact, country: this.club.country
      };

      const response = await API.graphql({
        query: mutations.createClub,
        variables: { input: createClubInput },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });
      return this.router.navigate(['/club']);
    } catch (err) {
      console.log(err);
    }
  }

}
