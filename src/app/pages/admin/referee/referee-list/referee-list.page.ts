import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RefereeService } from '../../../../services/referee.service';
import * as subscriptions from '../../../../../graphql/subscriptions';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { ToastService } from '../../../../services/toast.service';

@Component({
  selector: 'app-referee-list',
  templateUrl: './referee-list.page.html',
  styleUrls: ['./referee-list.page.scss'],
})
export class RefereeListPage implements OnInit {

  public referees = new Array();

  constructor(
    private router: Router,
    private refereeService: RefereeService,
    public toastService: ToastService,
  ) { }

  ngOnInit() {
    this.loadReferees();
    this.subscribeOnCreateReferee();
    this.subscribeOnUpdateReferee();
    this.subscribeOnDeleteReferee();

  }

  subscribeOnCreateReferee() {
    API.graphql(
      graphqlOperation(subscriptions.onCreateReferee)
    ).subscribe({
      next: (refereeData) => {
        this.referees.push(refereeData.value.data.onCreateReferee);
        this.toastService.presentToast('Scheidsrechter is aangemaakt.');
      }
    });
  }

  private subscribeOnUpdateReferee() {
    API.graphql(
      graphqlOperation(subscriptions.onUpdateReferee)
    ).subscribe({
      next: (sportsHallData) => {
        this.updateSportsHall(sportsHallData);
      }
    });
  }

  private subscribeOnDeleteReferee() {
    API.graphql(
      graphqlOperation(subscriptions.onDeleteReferee)
    ).subscribe({
      next: (sportsHallData) => {
        this.deleteSportsHall(sportsHallData);
      }
    });
  }

  private updateSportsHall(sportsHallData) {
    const sportsHall = sportsHallData.value.data.onUpdateReferee;
    for (let i = 0; i < this.referees.length; i++) {
      if (this.referees[i].id === sportsHall.id) {
        this.referees[i] = sportsHall;
        this.toastService.presentToast('Sporthal is bijgewerkt');
        return;
      }
    }
  }

  private deleteSportsHall(sportsHallData) {
    const sportsHall = sportsHallData.value.data.onUpdateReferee;
    for (let i = 0; i < this.referees.length; i++) {
      if (this.referees[i].id === sportsHall.id) {
        this.referees.splice(i, 1);
        this.toastService.presentToast('Sporthal is verwijderd');
        return;
      }
    }
  }

  private async loadReferees() {
    this.referees = await this.refereeService.getReferees();
  }

  goToRefereeCreatePage() {
    return this.router.navigate(['/admin/referee/create']);
  }

  goToRefereeEditPage(refereeId) {
    return this.router.navigate(['/admin/referee/edit/' + refereeId]);
  }

}
