import { Component, OnInit } from '@angular/core';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { Router } from '@angular/router';
import * as mutations from '../../../../../graphql/mutations';
import { CreateSportsHallInput } from 'src/API';
import { environment } from '../../../../../environments/environment';
import { GRAPHQL_AUTH_MODE } from '../../../../../../node_modules/@aws-amplify/api/lib/types/index';

@Component({
  selector: 'app-sports-hall-create',
  templateUrl: './sports-hall-create.page.html',
  styleUrls: ['./sports-hall-create.page.scss'],
})
export class SportsHallCreatePage implements OnInit {

  public sportsHall: { name: string, street: string, zipcode: string, city: string, phone: string, streetNumber: number };
  private initialSportsHallState = {
    name: 'Sportpunt zeeland', street: 'Zwembadweg',
    zipcode: '1234 AV', city: 'Goes', phone: '0113-123456', streetNumber: 89
  };

  constructor(private router: Router) {
    this.sportsHall = this.initialSportsHallState;
  }

  ngOnInit() {
  }

  async processForm() {

    try {
      const createSportsHallInput: CreateSportsHallInput = {
        name: this.sportsHall.name, sportsHallClubId: environment.clubId, active: true, street: this.sportsHall.street,
        zipCode: this.sportsHall.zipcode, city: this.sportsHall.city, phone: this.sportsHall.phone,
        streetNumber: this.sportsHall.streetNumber
      };

      const response = await API.graphql({
        query: mutations.createSportsHall,
        variables: { input: createSportsHallInput },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });

      if (response.errors != null && response.errors.length > 0) {

      } else {
        return this.router.navigate(['/admin/sports-hall']);
      }
    } catch (err) {
      console.log(err);
    }
  }

}
