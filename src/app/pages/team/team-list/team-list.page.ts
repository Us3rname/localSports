import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'team-list-page',
  templateUrl: './team-list.page.html',
  styleUrls: ['./team-list.page.scss'],
})
export class TeamListPage {

  public allTeams = new Array();

  public teamsPerLeague = new Array();
  public selectedLeagueId;
  public shownTeams;

  constructor(
    public toastService: ToastService
  ) {
    this.selectedLeagueId = null;
    this.shownTeams = new Array();
    this.allTeams = new Array();
    this.teamsPerLeague = new Array();
  }

  // Is being triggerd in app-league-header
  onLeagueSelected(leagueId) {
    this.selectedLeagueId = leagueId;
    console.log(leagueId);
  }
}
