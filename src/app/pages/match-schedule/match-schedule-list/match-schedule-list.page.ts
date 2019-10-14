import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-schedule-list',
  templateUrl: './match-schedule-list.page.html',
  styleUrls: ['./match-schedule-list.page.scss'],
})
export class MatchScheduleListPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToGameCreatePage() {
    this.router.navigate(['match-schedule/create']);
  }
}
