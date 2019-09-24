import { Injectable } from '@angular/core';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import { GRAPHQL_AUTH_MODE } from '../../../node_modules/@aws-amplify/api/lib/types/index';

@Injectable({
  providedIn: 'root'
})
export class LeagueDataService {

  constructor() { }


  async getActiveLeagues() {

    let leagues: any[];

    const leagueData = await API.graphql({
      query: queries.listLeagues,
      variables: {
        filter:
        {
          active:
            { eq: true }
        }
      },
      authMode: GRAPHQL_AUTH_MODE.API_KEY
    });

    if (leagueData) {
      leagues = leagueData.data.listLeagues.items;
    }

    return leagues;
  }
}
