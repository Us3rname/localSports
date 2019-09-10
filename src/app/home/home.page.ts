import { Component, AfterContentInit } from '@angular/core';
import { AuthGuardService } from '../services/auth-route-guard.service';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterContentInit {

  signUpConfig = {
    header: 'My Customized Sign Up',
    hideAllDefaults: true,
    defaultCountryCode: '1',
    signUpFields: [
      {
        label: 'Name',
        key: 'name',
        required: true,
        displayOrder: 1,
        type: 'string',
      },
      {
        label: 'Email',
        key: 'username',
        required: true,
        displayOrder: 1,
        type: 'email',
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 2,
        type: 'password'
      }
    ]
  };

  authState: any;
  // including AuthGuardService here so that it's available to listen to auth events
  authService: AuthGuardService;

  constructor(public events: Events, public guard: AuthGuardService) {
    this.authState = { loggedIn: false };
    this.authService = guard;
  }

  ngAfterContentInit() {
    this.events.publish('data:AuthState', this.authState);
  }

  login() {
    this.authState.loggedIn = true;
    this.events.publish('data:AuthState', this.authState);
  }

  logout() {
    this.authState.loggedIn = false;
    this.events.publish('data:AuthState', this.authState);
  }

}
