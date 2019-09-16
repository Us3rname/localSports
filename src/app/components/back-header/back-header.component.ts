import { Component, Input } from '@angular/core';

@Component({
  selector: 'back-header',
  templateUrl: './back-header.component.html',
  styleUrls: ['./back-header.component.scss'],
})
export class BackHeaderComponent {

  @Input() headerTitle: string;

  constructor() { }

}
