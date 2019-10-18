import { Injectable } from '@angular/core';
import { GraphqlRequestService } from './graphql-request.service';
import { CreateLeagueInfoInput, CreateLeagueInput } from 'src/API';
@Injectable({
  providedIn: 'root'
})
export class LeagueDataService {

  constructor(
    private graphqlRequestService: GraphqlRequestService
  ) { }


  async createCompletelyNewLeague(createLeagueInfo: CreateLeagueInfoInput, createLeagueInput: CreateLeagueInput) {
    const leagueInfo = await this.createLeagueInfo(createLeagueInfo);
    createLeagueInput.leagueLeagueInfoId = leagueInfo.id;
    return await this.graphqlRequestService.doPrivateMutation('createLeague', { input: createLeagueInput });
  }

  async createLeagueInfo(createLeagueInfoInput: CreateLeagueInfoInput) {

    await this.graphqlRequestService.doPrivateMutation('createLeagueInfo', { input: createLeagueInfoInput });

    let leagueInfo;
    if (this.graphqlRequestService.isSuccessfull) {
      leagueInfo = this.graphqlRequestService.data;
    }

    return leagueInfo;
  }


  async createLeague(createLeagueInput: CreateLeagueInput) {

    await this.graphqlRequestService.doPrivateMutation('createLeague', { input: createLeagueInput });

    let league;
    if (this.graphqlRequestService.isSuccessfull) {
      league = this.graphqlRequestService.data;
    }

    return league;
  }


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
    if (a.leagueInfo.ranking === b.leagueInfo.ranking) {
      console.log('Rankings should be unique');
      return 0;
    }

    return (a.leagueInfo.ranking < b.leagueInfo.ranking) ? -1 : 1;
  }
}
