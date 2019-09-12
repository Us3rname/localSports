import { Component, AfterContentInit, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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

  amplifyService: AmplifyService;

  isLoggedIn = false;
  user: { id: string; username: string; email: string, name: string };

  constructor(
    public amplify: AmplifyService,
    private router: Router,
    private authService: AuthService
  ) {

    this.amplifyService = amplify;

    this.authService.isLoggedIn$.subscribe(
      isLoggedIn => (this.isLoggedIn = isLoggedIn)
    );

    this.authService.auth$.subscribe(({ id, username, email, name }) => {
      this.user = { id, username, email, name };
    });

  }

  async ngOnInit() {
    // Getting the user details will trigger an event to set the auth state correctly.
    if (this.isLoggedIn) {
      this.router.navigate(['/profile']);
    }
  }
}
