import { Component } from '@angular/core';
import { AuthGuardService } from '../services/auth-route-guard.service';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  authState: any;
  // including AuthGuardService here so that it's available to listen to auth events
  authService: AuthGuardService;

  constructor(public events: Events, public guard: AuthGuardService) {
    this.authState = { loggedIn: false };
    this.authService = guard;
  }

}
