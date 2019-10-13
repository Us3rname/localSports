import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  isLoggedIn = false;
  user: { id: string; username: string; email: string, name: string } = {
    username: null,
    id: null,
    email: null,
    name: null
  };

  constructor(private authService: AuthService, private router: Router) {

    this.authService.isLoggedIn$.subscribe(
      isLoggedIn => (this.isLoggedIn = isLoggedIn)
    );

    this.authService.auth$.subscribe(({ id, username, email, name }) => {
      this.user = { id, username, email, name };
    });
  }

  ngOnInit() {
    if (!this.isLoggedIn) {
      return this.router.navigate(['/login']);
    }
  }
}
