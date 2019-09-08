import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
})
export class MenuHeaderComponent implements OnInit {

  @Input() headerTitle: string;

  constructor() {
  }

  ngOnInit() { }

}
