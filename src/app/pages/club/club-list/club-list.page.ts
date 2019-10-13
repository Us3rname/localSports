import { Component, OnInit } from '@angular/core';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../../graphql/queries';
@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.page.html',
  styleUrls: ['./club-list.page.scss'],
})
export class ClubListPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadClub();
  }

  async loadClub() {
    const allLeagues = await API.graphql(graphqlOperation(queries.listClubs));
    console.log(allLeagues);
  }

}
