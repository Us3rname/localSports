import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-season-create',
  templateUrl: './season-create.page.html',
  styleUrls: ['./season-create.page.scss'],
})
export class SeasonCreatePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSeasonMutated() {
    this.router.navigate(['/admin/season']);
  }

}
