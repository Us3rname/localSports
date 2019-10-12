import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss'],
})
export class InputErrorComponent implements OnInit {


  @Input() formToValidate;
  @Input() formSubmitted = false;
  @Input() validationMessages = {};
  @Input() inputFieldName;

  constructor() {
  }

  ngOnInit() {
    console.log(this.formSubmitted);
  }

}
