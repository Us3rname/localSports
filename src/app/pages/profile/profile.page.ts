import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../interfaces/user';
import { State, getUser, isLoggedIn } from '../../reducers';
import { Observable } from 'rxjs';
import * as AuthActions from '../../actions/auth.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: User;
  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    // Use AWS Amplify to get user data when creating items
    // const blaUser = {
    // uuid: 'test',
    // name: 'Test name'
    // };
    // this.store.dispatch(new AuthActions.Login({ isLoggedIn: true, user: blaUser }));

    this.getUser();
  }

  getUser() {
    return this.store.select(getUser).subscribe(user => {
      this.user = user;
    });
  }
}
