import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
    this.router.navigate(['/app/tabs/schedule']);
  }

}
