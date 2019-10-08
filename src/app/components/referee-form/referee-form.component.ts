import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RefereeService } from 'src/app/services/referee.service';
import { CreateRefereeInput, UpdateRefereeInput } from 'src/API';
import { Referee } from 'src/app/interfaces/referee';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'referee-form',
  templateUrl: './referee-form.component.html',
  styleUrls: ['./referee-form.component.scss'],
})
export class RefereeFormComponent implements OnInit {

  @Input() referee: Referee;
  @Input() action: string;
  @Input() refereeId: string;

  @Output() refereeMutated = new EventEmitter<object>();
  constructor(
    private refereeService: RefereeService
  ) { }

  ngOnInit() {

  }

  async processForm() {

    let referee;
    if (this.action === 'create') {
      const createRefereeInput: CreateRefereeInput = {
        firstName: this.referee.firstName, lastName: this.referee.lastName, refereeClubId: environment.clubId,
        street: this.referee.street, zipCode: this.referee.zipCode, city: this.referee.city,
        phone: this.referee.phone, streetNumber: this.referee.streetNumber
      };

      referee = await this.refereeService.createReferee(createRefereeInput);
    } else if (this.action === 'edit') {

      const updateRefereeInput: UpdateRefereeInput = {
        firstName: this.referee.firstName, lastName: this.referee.lastName, id: this.refereeId,
        street: this.referee.street, zipCode: this.referee.zipCode, city: this.referee.city,
        phone: this.referee.phone, streetNumber: this.referee.streetNumber
      };

      referee = await this.refereeService.updateReferee(updateRefereeInput);
    }

    this.refereeMutated.emit(referee);
  }

}
