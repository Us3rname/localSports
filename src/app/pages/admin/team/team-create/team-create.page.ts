import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { LeagueDataService } from '../../../../services/league-data.service';
import { GraphqlRequestService } from '../../../../services/graphql-request.service';
import { Router } from '@angular/router';
import { CreateTeamInput } from '../../../../../API';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.page.html',
  styleUrls: ['./team-create.page.scss'],
})
export class TeamCreatePage implements OnInit {

  i = 2;
  defaultHref: '';
  team: CreateTeamInput;
  initialTeamState = {
    name: 'Team ' + this.i++, contact: 'Henkie', teamLeagueId: null, leagueId: null, teamClubId: environment.clubId
  };
  leagues = new Array();


  constructor(
    private router: Router,
    private leagueDataService: LeagueDataService,
    private graphqlRequestService: GraphqlRequestService) {
  }

  ngOnInit() {
    this.team = this.initialTeamState;
    this.loadLeagues();
  }

  async loadLeagues() {
    this.leagues = await this.leagueDataService.getLeagues();
  }

  async processForm() {

    try {
      // General workaround to be able to filter the teams per league.
      this.team.leagueId = this.team.teamLeagueId;
      await this.graphqlRequestService.doPrivateMutation('createTeam', { input: this.team });

      if (this.graphqlRequestService.isSuccessfull) {
        return this.router.navigate(['/admin/team']);
      }

    } catch (err) {
      console.log(err);
    }
  }
}
