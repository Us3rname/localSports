import { Component, OnInit } from '@angular/core';
import * as mutations from '../../../../graphql/mutations';
import { CreateLeagueInput, CreateClubInput } from 'src/API';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { Router } from '@angular/router';

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
      await API.graphql(graphqlOperation(mutations.createClub, { input: createClubInput }));
      return this.router.navigate(['/club']);
    } catch (err) {
      console.log(err);
    }
  }

}
