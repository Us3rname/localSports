import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as subscriptions from '../../../../../graphql/subscriptions';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { ToastService } from '../../../../services/toast.service';
import { GraphqlRequestService } from '../../../../services/graphql-request.service';

@Component({
  selector: 'app-sports-hall-list',
  templateUrl: './sports-hall-list.page.html',
  styleUrls: ['./sports-hall-list.page.scss'],
})
export class SportsHallListPage implements OnInit {

  sportsHalls = new Array();

  constructor(
    private router: Router,
    private graphqlRequestService: GraphqlRequestService,
    public toastService: ToastService,
  ) { }


  ngOnInit() {
    this.loadSportsHalls();
    this.subscribeOnCreateSportsHall();
    this.subscribeOnUpdateSportsHall();
  }

  private subscribeOnCreateSportsHall() {
    API.graphql(
      graphqlOperation(subscriptions.onCreateSportsHall)
    ).subscribe({
      next: (sportsHallData) => {
        this.sportsHalls.push(sportsHallData.value.data.onCreateSportsHall);
        this.toastService.presentToast('Sporthal is aangemaakt.');
      }
    });
  }

  private subscribeOnUpdateSportsHall() {
    API.graphql(
      graphqlOperation(subscriptions.onUpdateSportsHall)
    ).subscribe({
      next: (sportsHallData) => {
        this.updateSportsHall(sportsHallData);
      }
    });
  }

  private updateSportsHall(sportsHallData) {
    const sportsHall = sportsHallData.value.data.onUpdateSportsHall;
    for (let i = 0; i < this.sportsHalls.length; i++) {
      if (this.sportsHalls[i].id === sportsHall.id) {
        if (sportsHall.active === false) {
          this.sportsHalls.splice(i, 1);
          this.toastService.presentToast('Sporthal is verwijderd');
          return;
        } else {
          this.sportsHalls[i] = sportsHall;
          this.toastService.presentToast('Sporthal is bijgewerkt');
          return;
        }
      }
    }
  }

  private async loadSportsHalls() {

    await this.graphqlRequestService.doPrivateQuery('listSportsHalls', {
      filter:
      {
        active:
          { eq: true }
      }
    });

    if (this.graphqlRequestService.isSuccessfull) {
      this.sportsHalls = this.graphqlRequestService.data.items;
    }
  }

  goToSportsHallCreatePage() {
    return this.router.navigate(['/admin/sports-hall/create']);
  }

  goToSportsHallEditPage(sportsHallId) {
    return this.router.navigate(['/admin/sports-hall/edit/' + sportsHallId]);
  }
}
