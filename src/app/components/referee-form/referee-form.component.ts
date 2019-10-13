import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RefereeService } from 'src/app/services/referee.service';
import { CreateRefereeInput, UpdateRefereeInput } from 'src/API';
import { Referee } from 'src/app/interfaces/referee';
import { environment } from '../../../environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  refereeForm: FormGroup;
  submitted = false;

  validationMessages = {
    firstName: [
      { type: 'required', message: 'Naam is verplicht.' }
    ],
    lastName: [
      { type: 'required', message: 'Achternaam is verplicht.' }
    ],
    street: [
      { type: 'required', message: 'Straat is verplicht.' }
    ],
    streetNumber: [
      { type: 'required', message: 'Huisnummer is verplicht.' }
    ],
    zipCode: [
      { type: 'required', message: 'Postcode is verplicht.' }
    ],
    city: [
      { type: 'required', message: 'Stad is verplicht.' }
    ],
    email: [
      { type: 'required', message: 'Email is verplicht.' },
      { type: 'email', message: 'Het e-mailadres is niet valide.' }
    ],
    phone: [
      { type: 'required', message: 'Telefoonnummer is verplicht.' }
    ],
  };

  constructor(
    private refereeService: RefereeService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.refereeForm = this.formBuilder.group({
      firstName: [this.referee.firstName, Validators.required],
      lastName: [this.referee.lastName, Validators.required],
      street: [this.referee.street, Validators.required],
      streetNumber: [this.referee.streetNumber, Validators.required],
      zipCode: [this.referee.zipCode, Validators.required],
      city: [this.referee.city, Validators.required],
      email: [this.referee.email, [Validators.required, Validators.email]],
      phone: [this.referee.phone, [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.refereeForm.controls; }

  async processForm(formValues) {

    // This will trigger the error messages (if there are any)
    this.submitted = true;

    // stop here if form is invalid
    if (this.refereeForm.invalid) {
      return;
    }

    let referee = formValues;
    if (this.action === 'create') {
      // We need to manually set the club id from the environment
      referee.refereeClubId = environment.clubId;
      const createRefereeInput: CreateRefereeInput = referee;

      referee = await this.refereeService.createReferee(createRefereeInput);
    } else if (this.action === 'edit') {
      // assign the referee id to the object.
      referee.id = this.refereeId;
      const updateRefereeInput: UpdateRefereeInput = referee;
      referee = await this.refereeService.updateReferee(updateRefereeInput);
    }

    this.refereeMutated.emit(referee);
  }

  async deleteReferee() {
    const referee = this.refereeService.deleteReferee(this.refereeId);
    this.refereeMutated.emit(referee);
  }
}
