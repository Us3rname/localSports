import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Wedstrijdschema',
      url: 'app/tabs/schedule',
      icon: 'calendar'
    },
    {
      title: 'Standen',
      url: 'app/tabs/ranking',
      icon: 'podium'
    },
    {
      title: 'Teams',
      url: 'app/tabs/team',
      icon: 'people'
    },
  ];

  public unAuthAccountPages = [
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    }
  ];

  public authPages = [
    {
      title: 'Profiel',
      url: '/profile',
      icon: 'contact'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'log-out'
    }
  ];

  public clubPages = [
    {
      title: 'Seizoenen',
      url: '/admin/season',
      icon: 'calendar'
    }, {
      title: 'Divisies',
      url: '/admin/league',
      icon: 'rocket'
    },
    {
      title: 'Team beheer',
      url: '/admin/team',
      icon: 'people'
    },
    {
      title: 'Scheidsrechters',
      url: '/admin/referee',
      icon: 'contacts'
    },
    {
      title: 'Sporthallen',
      url: '/admin/sports-hall',
      icon: 'pin'
    }
  ];

  public usernameAttributes = 'email';
  isLoggedIn = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.isLoggedIn$.subscribe(
        isLoggedIn => (this.isLoggedIn = isLoggedIn)
      );
    });
  }
}
