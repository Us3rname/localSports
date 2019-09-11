import { Component, AfterContentInit, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { AuthGuardService } from '../../services/auth-route-guard.service';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State, getUser, isLoggedIn } from '../../reducers';
import * as AuthActions from '../../actions/auth.actions';
import { userInfo } from 'os';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements AfterContentInit, OnInit {

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
  amplifyService: AmplifyService;

  constructor(
    public events: Events,
    public guard: AuthGuardService,
    public amplify: AmplifyService,
    private router: Router,
    private store: Store<State>
  ) {

    this.authState = { loggedIn: false };
    this.authService = guard;
    this.amplifyService = amplify;
    this.amplifyService.authStateChange$
      .subscribe(authState => {

        if (authState.state === 'signedIn') {
          const cognitoUser = authState.user;
          const user = {
            uuid: cognitoUser.attributes.sub,
            name: cognitoUser.attributes.name
          };
          // const user = new User(cognitoUser.username, );
          this.store.dispatch(new AuthActions.Login({ isLoggedIn: true, user: user }));
        }
        this.events.publish('data:AuthState', this.authState);
      });

  }

  async ngOnInit() {
    // Getting the user details will trigger an event to set the auth state correctly.
    const user = await this.amplifyService.auth().currentUserInfo();
    if (this.authState.loggedIn) {
      this.router.navigate(['/profile']);
    }
  }

  ngAfterContentInit() {
    this.events.publish('data:AuthState', this.authState);
  }

}
