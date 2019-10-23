import { Injectable } from '@angular/core';
import { GraphqlRequestService } from './graphql-request.service';
import { CreateLeagueInfoInput, CreateLeagueInput, UpdateLeagueInput, CreateLeagueTeamInput } from 'src/API';
import { TeamLeague } from '../components/admin/season-form/season-form.component';
@Injectable({
  providedIn: 'root'
})
export class LeagueDataService {

  constructor(
    private graphqlRequestService: GraphqlRequestService
  ) { }


  async assignSeasonToLeague(leagueId, seasonId) {

    const updateLeagueInput: UpdateLeagueInput = {
      id: leagueId, leagueSeasonId: seasonId
    };

    await this.graphqlRequestService.doPrivateMutation('updateLeague', { input: updateLeagueInput });
    return this.graphqlRequestService.data;
  }

  async createTeamLeague(teamLeague: TeamLeague) {

    for (const teamId of teamLeague.teams) {
      const createTeamLeagueInput: CreateLeagueTeamInput = {
        leagueId: teamLeague.league.id, leagueTeamLeagueId: teamLeague.league.id, leagueTeamTeamId: teamId, teamId
      };

      await this.graphqlRequestService.doPrivateMutation('createLeagueTeam', { input: createTeamLeagueInput });
    }

  }

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
      console.log(leagues);
      leagues.sort(this.sortByRanking);
    }

    return leagues;
  }

  private sortByRanking(a, b) {
    if (a.leagueInfo.ranking === b.leagueInfo.ranking) {
      console.log('Error: Sorting is not correct, some rankings are equal.');
      return 0;
    }

    return (a.leagueInfo.ranking < b.leagueInfo.ranking) ? -1 : 1;
  }
}
