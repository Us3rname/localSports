import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sports-hall-list',
  templateUrl: './sports-hall-list.page.html',
  styleUrls: ['./sports-hall-list.page.scss'],
})
export class SportsHallListPage {

  sportsHalls = new Array();

  constructor(
    private router: Router,
  ) { }

  goToSportsHallCreatePage() {
    return this.router.navigate(['/admin/sports-hall/create']);
  }
}
