import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GraphqlRequestService } from '../../../services/graphql-request.service';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as subscriptions from '../../../../graphql/subscriptions';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent implements OnInit {

  public allTeams = new Array();
  public teamsPerLeague = new Array();
  public shownTeams;
  isLoading;
  loadingItems = new Array(5); // Skeleton loader shows 5 items
  @Input() leagueId: string;

  @Output() teamSelected = new EventEmitter<object>();

  constructor(
    private graphqlRequestService: GraphqlRequestService,
    public toastService: ToastService
  ) { }

  ngOnInit() {
    this.subscribeOnCreateTeam();
    this.subscribeOnUpdateTeam();
    this.subscribeOnDeleteTeam();
  }

  async loadTeams() {

    this.isLoading = true;
    // To prevent that we do a new call each time when we switch league keep track of the teams per league.
    if (this.allTeams[this.leagueId] == null) {

      await this.graphqlRequestService.doPublicQuery('listLeagueTeams',
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

    // Get the teams from the teamPerLeague entity
    const teamsPerLeague = new Array();
    for (const teamLeague of data.items) {
      teamsPerLeague.push(teamLeague.team);
    }

    // Sort the teams by name
    teamsPerLeague.sort(this.sortByTeamName);

    this.allTeams[leagueId] = {
      items: teamsPerLeague,
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

  private subscribeOnCreateTeam() {

    // Subscribe for new teams when they create it through the app.
    API.graphql(
      graphqlOperation(subscriptions.onCreateTeam)
    ).subscribe({
      next: (teamData) => {
        this.updateTeamsAfterCreate(teamData.value.data.onCreateTeam);
      }
    });
  }

  updateTeamsAfterCreate(team) {
    console.log(team);
    this.allTeams[team.leagueId].items.push(team);
    this.shownTeams = this.allTeams[this.leagueId].items;
    this.toastService.presentToast('Team is aangemaakt.');
  }

  private subscribeOnUpdateTeam() {
    API.graphql(
      graphqlOperation(subscriptions.onUpdateTeam)
    ).subscribe({
      next: (teamData) => {
        this.updateLocalTeams(teamData);
      }
    });
  }

  private subscribeOnDeleteTeam() {
    API.graphql(
      graphqlOperation(subscriptions.onDeleteTeam)
    ).subscribe({
      next: (teamData) => {
        this.deleteTeam(teamData);
      }
    });
  }

  updateLocalTeams(teamData) {
    const team = teamData.value.data.onUpdateTeam;
    for (let i = 0; i < this.allTeams[this.leagueId].items.length; i++) {
      if (this.allTeams[this.leagueId].items[i].id === team.id) {

        // When the team changes league, we need to remove it from the current league & add it to the new league
        if (this.leagueId !== team.league.id) {
          this.allTeams[this.leagueId].items.splice(i, 1);
        }
        this.allTeams[team.league.id].items[i] = team;
        this.toastService.presentToast('Team is bijgewerkt');
        return;
      }
    }
  }

  deleteTeam(teamData) {
    const team = teamData.value.data.onDeleteTeam;
    for (let i = 0; i < this.allTeams[this.leagueId].items.length; i++) {
      if (this.allTeams[this.leagueId].items[i].id === team.id) {
        this.allTeams[this.leagueId].items.splice(i, 1);
        this.toastService.presentToast('Team is verwijderd');
        return;
      }
    }
  }
}
