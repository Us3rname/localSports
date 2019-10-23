import { Injectable } from '@angular/core';
import { League } from 'src/app/interfaces/league';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class SeasonLeagueManagerService {


  leagues: League[];
  existingLeagues: League[];
  disconnectLeaguesFromSeason: League[];

  constructor() { }

  addEmptyHall() {
    // Need to generate an unique id for the frontend. Is not being used as an id for the hall itself.
    // const newLeague: League = { id: uuid.v4(), leagueInfo }
    // this.leagues.push(newHall);
    // this.newHalls[newHall.id] = newHall;
  }

  removeHall(index, hallId) {

    // We loop over the halls in the template they have a normal index
    if (this.leagues[index]) {
      this.leagues.splice(index, 1);
    }

    // When it's an existing hall mark it to delete
    if (this.existingLeagues[hallId]) {
      this.disconnectLeaguesFromSeason.push(this.existingLeagues[hallId]);
      this.existingLeagues.splice(hallId, 1);
    }
  }
}
