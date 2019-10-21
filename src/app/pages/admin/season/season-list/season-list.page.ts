import { Component, OnInit } from '@angular/core';
import { SeasonDataService } from 'src/app/services/season-data.service';
import { Router } from '@angular/router';
import { API, graphqlOperation } from 'aws-amplify';
import * as subscriptions from '../../../../../graphql/subscriptions';
import { ToastService } from 'src/app/services/toast.service';
import { Season } from 'src/app/interfaces/season';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.page.html',
  styleUrls: ['./season-list.page.scss'],
})
export class SeasonListPage implements OnInit {

  seasons = new Array();

  constructor(private seasonDataService: SeasonDataService, private router: Router, public toastService: ToastService) { }

  ngOnInit() {
    this.loadSeasons();
    this.subscribeOnCreateSeason();
    this.subscribeOnDeleteSeason();
  }

  async loadSeasons() {

    const seasons = await this.seasonDataService.getSeasons();
    this.seasons = seasons.items;
  }

  private subscribeOnCreateSeason() {
    API.graphql(
      graphqlOperation(subscriptions.onCreateSeason)
    ).subscribe({
      next: (seasonData) => {
        this.seasons.push(seasonData.value.data.onCreateSeason);
        this.toastService.presentToast('Seizoen is aangemaakt.');
      }
    });
  }

  private subscribeOnDeleteSeason() {
    API.graphql(
      graphqlOperation(subscriptions.onDeleteSeason)
    ).subscribe({
      next: (seasonData) => {
        this.deleteSeason(seasonData.value.data.onDeleteSeason);
        this.toastService.presentToast('Seizoen is verwijderd.');
      }
    });
  }

  private deleteSeason(season: Season) {

    for (let i = 0; i < this.seasons.length; i++) {
      if (this.seasons[i].id === season.id) {
        this.seasons.splice(i, 1);
      }
    }
  }

  goToSeasonCreatePage() {
    this.router.navigate(['admin/season/create']);
  }

  onSeasonSelected(season) {
    this.router.navigate(['admin/season/edit/' + season.id]);
  }
}
