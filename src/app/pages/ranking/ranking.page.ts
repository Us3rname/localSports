import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Standing {
  teamName: string;
  points: number;
  wins: number;
  draws: number;
  loses: number;
}

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {

  public standings: Array<Standing> = new Array();

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
    this.loadRankings();
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  loadRankings() {

    const teams = ['FM Sranang', 'De Bruine', 'Den Hollander', 'Profile Tyresenter', 'Van De Velde / Boone', 'Rentmeester IT',
      'Van Dijk Schilderwerk', 'De Goffau Admin & Cons.', 'DRV Acc & Adviseurs', 'Lukasse Dakbedekkingen', 'Albert Heijn',
      'Corstanje Assurantiën'];

    for (let i = 0; i < 10; i++) {

      this.standings.push(
        {
          teamName: teams[i],
          wins: this.getRandomInt(5),
          draws: this.getRandomInt(5),
          loses: this.getRandomInt(5),
          points: this.getRandomInt(20)

        }
      );
      console.log(this.standings);
    }
  }

}
