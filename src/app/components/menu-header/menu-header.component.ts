import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
})
export class MenuHeaderComponent {

  @Input() headerTitle: string;
  @Input() buttonType = 'menu';

  constructor() {
  }

}
