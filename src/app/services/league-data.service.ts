import { Injectable } from '@angular/core';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import { GRAPHQL_AUTH_MODE } from '../../../node_modules/@aws-amplify/api/lib/types/index';
import { GraphqlRequestService } from './graphql-request.service';
@Injectable({
  providedIn: 'root'
})
export class LeagueDataService {

  constructor(
    private graphqlRequestService: GraphqlRequestService
  ) { }


  async getActiveLeagues() {

    let leagues: any[];

    await this.graphqlRequestService.doPublicQuery('listLeagues', {
      filter:
      {
        active:
          { eq: true }
      }
    });

    if (this.graphqlRequestService.isSuccessfull) {
      leagues = this.graphqlRequestService.data.items;
    }

    return leagues;
  }
}
