import { Component, OnInit } from '@angular/core';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../../../graphql/mutations';
import { Router } from '@angular/router';
import { CreateTeamInput } from '../../../../API';
@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.page.html',
  styleUrls: ['./team-create.page.scss'],
})
export class TeamCreatePage implements OnInit {

  defaultHref: '';
  team: CreateTeamInput = { name: null, contact: null, division: 'Division', active: true, lastUpdated: new Date().toJSON() };
  constructor(private router: Router) { }

  ngOnInit() {

  }

  handleTeamNameValue(event): void {
    console.log(event);
    this.team.name = event.target.value;
    console.log(this.team);
  }

  handleContactValue(event): void {
    console.log(event);
    this.team.contact = event.target.value;
    console.log(this.team);
  }

  async processForm(event) {

    try {
      const newTeam = await API.graphql(graphqlOperation(mutations.createTeam, { input: this.team }));
      return this.router.navigate(['/team']);
    } catch (err) {
      console.log(err);
    }
  }
}
