import { Component, OnInit } from '@angular/core';
import { SeasonDataService } from 'src/app/services/season-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Season } from 'src/app/interfaces/season';

@Component({
  selector: 'app-season-edit',
  templateUrl: './season-edit.page.html',
  styleUrls: ['./season-edit.page.scss'],
})
export class SeasonEditPage implements OnInit {

  seasonId: string;

  constructor(private seasonDataService: SeasonDataService, private route: ActivatedRoute, private router: Router) {
    this.seasonId = this.route.snapshot.paramMap.get('seasonId');
  }

  ngOnInit() {

  }

  onSeasonMutated() {
    this.router.navigate(['/admin/season']);
  }
}
