import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss'],
})
export class DeleteButtonComponent implements OnInit {

  @Input() btnLabel;
  @Output() deleteButtonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() { }

}
