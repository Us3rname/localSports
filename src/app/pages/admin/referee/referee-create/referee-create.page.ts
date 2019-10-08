import { Component, OnInit } from '@angular/core';
import { CreateRefereeInput } from 'src/API';
import { Router } from '@angular/router';
import { RefereeService } from '../../../../services/referee.service';

@Component({
  selector: 'app-referee-create',
  templateUrl: './referee-create.page.html',
  styleUrls: ['./referee-create.page.scss'],
})
export class RefereeCreatePage implements OnInit {

  referee: {
    firstName: string, lastName: string, street: string, streetNumber: number, streetNumberAddition: string,
    zipCode: string, city: string, email: string, phone: string
  };

  initialReferee = {
    firstName: 'voornaam', lastName: 'achternaam', street: 'straat', streetNumber: 6, streetNumberAddition: 'a',
    zipCode: '1234ab', city: 'stad', email: 'emailadres', phone: 'telefoon'
  };

  constructor(
    private refereeService: RefereeService,
    private router: Router
  ) {
    this.referee = this.initialReferee;
  }

  ngOnInit() {

  }

  async processForm() {
    try {
      const createRefereeInput: CreateRefereeInput = this.referee;
      const referee = await this.refereeService.createReferee(createRefereeInput);

      if (referee !== null) {
        return this.router.navigate(['/admin/referee']);
      } else {

      }
    } catch (err) {
      console.log(err);
    }
  }

}
