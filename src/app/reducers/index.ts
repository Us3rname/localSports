import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromAuth from './auth.reducer';


export interface State {
  auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getAuthState = (state: State) => state.auth;

export const isLoggedIn = createSelector(
  getAuthState,
  fromAuth.isLoggedIn
);

export const getUser = createSelector(
  getAuthState,
  fromAuth.getUser
);
