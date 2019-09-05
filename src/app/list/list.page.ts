import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getISOWeek, lastDayOfWeek, startOfWeek, getDay, subWeeks, addWeeks } from 'date-fns';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listGames } from '../../graphql/queries';

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
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
})
export class ListPage {

  public items = [];
  public data: Data;
  public week: string;

  showPreviousWeekBtn = true;
  showNextWeekBtn = true;
  isLoading = false;

  public calculationDate;

  constructor(private http: HttpClient) {
    this.calculationDate = new Date();
    this.week = 'Week ' + getISOWeek(this.calculationDate);
  }

  ionViewDidEnter() {
    this.listGames();
  }

  async listGames() {
    this.items = [];
    this.isLoading = true;
    const data = await API.graphql(graphqlOperation(listGames, {
      filter: {
        gameDay: {
          between: [startOfWeek(this.calculationDate, { weekStartsOn: 1 }), lastDayOfWeek(this.calculationDate, { weekStartsOn: 1 })]
        }
      }
    }
    ));

    const items = data.data.listGames.items;

    items.map((item) => {
      const day = getDay(new Date(item.gameDay));
      if (this.items == null || !this.items.hasOwnProperty(day)) {
        this.items[day] = [];
      }

      this.items[day].push(item);

    });

    this.items = this.items.filter((el) => {
      return el != null;
    });
    this.isLoading = false;
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
