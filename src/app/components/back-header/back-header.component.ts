import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'back-header',
  templateUrl: './back-header.component.html',
  styleUrls: ['./back-header.component.scss'],
})
export class BackHeaderComponent implements OnInit {

  @Input() headerTitle: string;

  constructor() { }

  ngOnInit() { }

}
