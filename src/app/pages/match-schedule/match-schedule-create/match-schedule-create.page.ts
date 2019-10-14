import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-schedule-create',
  templateUrl: './match-schedule-create.page.html',
  styleUrls: ['./match-schedule-create.page.scss'],
})
export class MatchScheduleCreatePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onGameCreated() {
    this.router.navigate(['/match-schedule']);
  }
}
