import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GraphqlRequestService } from '../../../services/graphql-request.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent implements OnInit {

  public allTeams = new Array();
  public teamsPerLeague = new Array();
  public shownTeams;
  private isLoading;
  private loadingItems = new Array(5); // Skeleton loader shows 5 items
  @Input() leagueId: string;
  @Input() message: string;

  @Output() teamSelected = new EventEmitter<object>();

  constructor(
    private graphqlRequestService: GraphqlRequestService
  ) { }

  ngOnInit() {
  }

  async loadTeams() {

    this.isLoading = true;
    // To prevent that we do a new call each time when we switch league keep track of the teams per league.
    if (this.allTeams[this.leagueId] == null) {

      await this.graphqlRequestService.doPublicQuery('listTeams',
        { filter: { leagueId: { eq: this.leagueId } } });

      if (this.graphqlRequestService.isSuccessfull) {
        this.updateAllTeamsData(this.leagueId, this.graphqlRequestService.data);
      } else {
        console.log('Error');
      }
    }
    this.shownTeams = this.allTeams[this.leagueId].items;
    this.isLoading = false;
  }

  private updateAllTeamsData(leagueId, data) {

    // Sort the teams by name
    data.items.sort(this.sortByTeamName);

    this.allTeams[leagueId] = {
      items: data.items,
      nextTeamToken: data.nextToken
    };
  }

  private sortByTeamName(a, b) {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  }

  onLeagueSelected(leagueId) {
    this.leagueId = leagueId;
    this.loadTeams();
  }

  onTeamSelected(team) {
    this.teamSelected.emit(team);
  }
}
