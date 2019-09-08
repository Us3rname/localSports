import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { getISOWeek, lastDayOfWeek, startOfWeek, getDay, subWeeks, addWeeks } from 'date-fns';
import { API, graphqlOperation } from 'aws-amplify';
import { listGames } from '../../../graphql/queries';


interface GameItem {
  id: string;
  homeTeam: string;
  awayTeam: string;
  gameDay: string;
  division: string;
  location: string;
}

interface Data {
  data: {
    listGames: {
      items: [GameItem]
    }
  };
}

@Component({
  selector: 'app-list',
  templateUrl: 'game-schedule.page.html',
  styleUrls: ['game-schedule.page.scss'],
})
export class GameSchedulePage {

  public items = new Array();
  public data: Data;
  public week: string;

  showPreviousWeekBtn = true;
  showNextWeekBtn = true;
  isLoading = false;
  hasError = false;

  public calculationDate;

  constructor(private http: HttpClient, public router: Router) {
    this.calculationDate = new Date();
    this.week = 'Week ' + getISOWeek(this.calculationDate);
  }


  ionViewDidEnter() {
    this.listGames();
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
}
