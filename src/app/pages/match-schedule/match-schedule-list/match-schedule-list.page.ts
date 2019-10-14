import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { getISOWeek, lastDayOfWeek, getDay, subWeeks } from 'date-fns';
import { API, graphqlOperation } from 'aws-amplify';
import { listGames } from 'src/graphql/queries';
import { startOfWeek, addWeeks } from 'date-fns/esm';
import { PopoverController } from '@ionic/angular';
import { GameActionMenuPage } from '../about-popover/game-action-menu.page.';

@Component({
  selector: 'app-match-schedule-list',
  templateUrl: './match-schedule-list.page.html',
  styleUrls: ['./match-schedule-list.page.scss'],
})
export class MatchScheduleListPage implements OnInit {

  public items = new Array();
  public data;
  public week: string;

  showPreviousWeekBtn = true;
  showNextWeekBtn = true;
  isLoading = false;
  hasError = false;

  public calculationDate;

  constructor(private http: HttpClient, public router: Router, public popoverCtrl: PopoverController) {
    this.calculationDate = new Date();
    this.week = 'Week ' + getISOWeek(this.calculationDate);
  }

  ngOnInit() {
    this.listGames();
  }

  goToGameCreatePage() {
    this.router.navigate(['match-schedule/create']);
  }

  async listGames() {

    // reset so that we do not have old results
    this.items = new Array();
    // Set loader to true, for showing the skeleton
    this.isLoading = true;

    // Request the game schedule for the week that has been passed.
    const data = await API.graphql(graphqlOperation(listGames, {
      filter: {
        gameDay: {
          between: [startOfWeek(this.calculationDate, { weekStartsOn: 1 }), lastDayOfWeek(this.calculationDate, { weekStartsOn: 1 })]
        }
      }
    }
    )).catch((error) => {
      console.log(error);
      this.hasError = true;
      this.isLoading = false;
    });

    // When there's no error format the array for the view in the correct way and reset loading variable
    if (!this.hasError) {
      this.sortResultByDay(data);
      this.isLoading = false;
    }
  }

  sortResultByDay(data) {
    const items = data.data.listGames.items;

    // Sort / format the result per day, so that we show the right games for the right day of the week
    items.map((item) => {

      // Get current day (as int) and use that as the key
      const day = getDay(new Date(item.gameDay));
      if (this.items == null || !this.items.hasOwnProperty(day)) {
        this.items[day] = new Array();
      }

      // Add result to the items list.
      this.items[day].push(item);
    });
  }

  loadPreviousWeek() {
    this.calculationDate = subWeeks(this.calculationDate, 1);
    this.listGames();
    this.week = 'Week ' + getISOWeek(this.calculationDate);
  }

  loadNextWeek() {
    this.calculationDate = addWeeks(this.calculationDate, 1);
    this.listGames();
    this.week = 'Week ' + getISOWeek(this.calculationDate);
  }

  async presentPopover(event, game) {
    console.log(game);
    const popover = await this.popoverCtrl.create({
      component: GameActionMenuPage,
      componentProps: {
        game
      },
      event
    });
    await popover.present();
  }
}
