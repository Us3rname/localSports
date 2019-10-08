import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-referee-edit',
  templateUrl: './referee-edit.page.html',
  styleUrls: ['./referee-edit.page.scss'],
})
export class RefereeEditPage implements OnInit {

  referee = {
    firstName: 'voornaam', lastName: 'achternaam', street: 'straat', streetNumber: 6, streetNumberAddition: 'a',
    zipCode: '1234ab', city: 'stad', email: 'emailadres', phone: 'telefoon'
  };
  refereeId: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.refereeId = this.route.snapshot.paramMap.get('refereeId');
  }

  ngOnInit() {
  }

  onRefereeMutation(event) {
    return this.router.navigate(['/admin/referee']);
  }
}
