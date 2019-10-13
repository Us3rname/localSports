import { Injectable } from '@angular/core';
import { GraphqlRequestService } from './graphql-request.service';
@Injectable({
  providedIn: 'root'
})
export class LeagueDataService {

  constructor(
    private graphqlRequestService: GraphqlRequestService
  ) { }

  async getLeagues() {

    let leagues = new Array();
    await this.graphqlRequestService.doPublicQuery('listLeagues', {});

    if (this.graphqlRequestService.isSuccessfull) {
      leagues = this.graphqlRequestService.data.items;
      leagues.sort(this.sortByRanking);
    }

    return leagues;
  }

  private sortByRanking(a, b) {
    if (a.ranking === b.ranking) {
      console.log('Rankings should be unique');
      return 0;
    }

    return (a.ranking < b.ranking) ? -1 : 1;
  }
}
