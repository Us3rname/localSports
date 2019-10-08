import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../../../graphql/queries';
import * as subscriptions from '../../../../../graphql/subscriptions';
import { ToastService } from '../../../../services/toast.service';
@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.page.html',
  styleUrls: ['./league-list.page.scss'],
})
export class LeagueListPage implements OnInit {

  public allLeagues = new Array();

  constructor(
    private router: Router,
    public toastService: ToastService,
  ) { }

  ngOnInit() {
    this.loadLeagues();
    this.subscribeOnCreateleague();
    this.subscribeOnUpdateLeague();
    this.subscribeOnDeleteLeague();
  }

  subscribeOnCreateleague() {
    API.graphql(
      graphqlOperation(subscriptions.onCreateLeague)
    ).subscribe({
      next: (leagueData) => {
        this.allLeagues.push(leagueData.value.data.onCreateLeague);
        this.toastService.presentToast('Divisie is aangemaakt.');
      }
    });
  }

  async loadLeagues() {
    const allLeagues = await API.graphql(graphqlOperation(queries.listLeagues));

    if (allLeagues) {
      this.allLeagues = allLeagues.data.listLeagues.items;
    }
  }

  goToLeagueCreatePage() {
    return this.router.navigate(['/admin/league/create']);
  }

  goToLeagueEditPage(leagueId) {
    return this.router.navigate(['/admin/league/edit/' + leagueId]);
  }

  subscribeOnUpdateLeague() {
    API.graphql(
      graphqlOperation(subscriptions.onUpdateLeague)
    ).subscribe({
      next: (leagueData) => {
        this.updateLocalLeagues(leagueData);
      }
    });
  }

  subscribeOnDeleteLeague() {
    API.graphql(
      graphqlOperation(subscriptions.onDeleteLeague)
    ).subscribe({
      next: (leagueData) => {
        this.deleteLocalLeague(leagueData);
      }
    });
  }

  updateLocalLeagues(leagueData) {
    const league = leagueData.value.data.onUpdateLeague;
    for (let i = 0; i < this.allLeagues.length; i++) {
      if (this.allLeagues[i].id === league.id) {
        this.allLeagues[i] = league;
        this.toastService.presentToast('Divisie is bijgewerkt');
        return;
      }
    }
  }

  deleteLocalLeague(leagueData) {
    const league = leagueData.value.data.onDeleteLeague;
    for (let i = 0; i < this.allLeagues.length; i++) {
      if (this.allLeagues[i].id === league.id) {
        this.allLeagues.splice(i, 1);
        this.toastService.presentToast('Divisie is verwijderd');
        return;
      }
    }
  }
}
