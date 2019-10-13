import * as fromAuth from '../actions/auth.actions';
import { User } from '../interfaces/user';

export interface AuthState {
    isLoggedIn: boolean;
    user: User;
}

export const initialState: AuthState = {
    isLoggedIn: false,
    user: null
};

export function reducer(
    state = initialState,
    action: fromAuth.ActionsUnion
): AuthState {
    switch (action.type) {
        case fromAuth.ActionTypes.Login: {
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                user: action.payload.user,
            };
        }

        case fromAuth.ActionTypes.Logout: {
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        }

        default: {
            return state;
        }
    }
}

export const isLoggedIn = (state: AuthState) => state.isLoggedIn;
export const getUser = (state: AuthState) => state.user;

