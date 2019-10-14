import { Injectable } from '@angular/core';
import { GraphqlRequestService } from './graphql-request.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  public allTeams = new Array();

  constructor(private graphqlRequestService: GraphqlRequestService) { }

  async getAllTeams() {
    await this.graphqlRequestService.doPublicQuery('listTeams', {});

    if (this.graphqlRequestService.isSuccessfull) {
      return this.graphqlRequestService.data.items;
    }
  }

  async getAllTeamsSortedPerLeague() {
    const teams = await this.getAllTeams();
    teams.sort(this.sortByTeamName);
    this.orderTeamsPerLeague(teams);
    return this.allTeams;
  }

  private orderTeamsPerLeague(teams) {
    teams.forEach(team => {
      this.addTeamsToLeagueArray(team.leagueId, { items: team, nextTeamToken: null });
    });
  }

  addTeamsToLeagueArray(leagueId, data) {
    // Sort the teams by name
    data.items.sort(this.sortByTeamName);

    if (this.allTeams[leagueId] == null) {
      this.allTeams[leagueId] = {
        items: data.items,
        nextTeamToken: data.nextToken
      };
    } else {
      this.allTeams[leagueId] = {
        items: this.allTeams[leagueId].items.concat(data.items),
        nextTeamToken: data.nextToken
      };
    }

    return this.allTeams;
  }

  private sortByTeamName(a, b) {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  }
}
