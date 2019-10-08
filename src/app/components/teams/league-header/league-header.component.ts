import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LeagueDataService } from '../../../services/league-data.service';

@Component({
  selector: 'app-league-header',
  templateUrl: './league-header.component.html',
  styleUrls: ['./league-header.component.scss'],
})
export class LeagueHeaderComponent implements OnInit {

  public leagues = new Array();
  private selectedLeagueId;
  @Output() leagueSelected = new EventEmitter<number>();

  constructor(
    private leagueDataService: LeagueDataService,
  ) {
    this.leagues = new Array();
  }

  ngOnInit() {
    this.loadAllLeagues();
  }

  async loadAllLeagues() {

    // Fetch leagues
    this.leagues = await this.leagueDataService.getLeagues();

    // Determine the selected league, on load it's the first one from the result list
    let leagueId = null;
    if (this.leagues.length > 0) {
      leagueId = this.selectedLeagueId = this.leagues[0].id;
    }

    // Send the league id through the component
    this.leagueSelected.emit(leagueId);
  }

  changeLeague(event) {
    this.selectedLeagueId = event.detail.value;
    this.leagueSelected.emit(this.selectedLeagueId);
  }
}
