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

  defaultHref: '';
  team: CreateTeamInput;
  initialTeamState = {
    name: null, contact: null, teamLeagueId: null, active: true, lastUpdated: new Date().toJSON(), teamClubId: environment.clubId
  };
  leagues = new Array();

  constructor(
    private router: Router,
    private leagueDataService: LeagueDataService,
    private graphqlRequestService: GraphqlRequestService) {
    this.team = this.initialTeamState;
  }

  ngOnInit() {
    this.loadLeagues();
  }

  async loadLeagues() {
    this.leagues = await this.leagueDataService.getActiveLeagues();
  }

  async processForm() {

    try {
      await this.graphqlRequestService.doPrivateMutation('createTeam', { input: this.team });

      if (this.graphqlRequestService.isSuccessfull) {
        return this.router.navigate(['/admin/team']);
      }

    } catch (err) {
      console.log(err);
    }
  }
}
