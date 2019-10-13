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

  // initialReferee = {
  //   firstName: 'voornaam', lastName: 'achternaam', street: 'straat', streetNumber: 6, streetNumberAddition: 'a',
  //   zipCode: '1234ab', city: 'stad', email: 'emailadres@email.com', phone: 'telefoon'
  // };

  initialReferee = {
    firstName: null, lastName: null, street: null, streetNumber: null, streetNumberAddition: null,
    zipCode: null, city: null, email: null, phone: null
  };

  constructor(
    private router: Router
  ) {
    this.referee = this.initialReferee;
  }

  ngOnInit() {

  }

  async processForm(referee) {
    if (referee !== null) {
      return this.router.navigate(['/admin/referee']);
    } else {
      console.log('Didnt get a referee');
    }
  }

}
