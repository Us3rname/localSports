import { Action } from '@ngrx/store';
import { User } from '../interfaces/user';

export enum ActionTypes {
    Login = '[Auth Service] Login',
    Logout = '[Auth Service] Logout'
}

export class Login implements Action {
    readonly type = ActionTypes.Login;

    constructor(public payload: { isLoggedIn: boolean, user: User | null }) { }
}

export class Logout implements Action {
    readonly type = ActionTypes.Logout;

    constructor() { }
}

export type ActionsUnion = Login | Logout;
