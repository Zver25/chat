import IUser from "../type/IUser";
import {EAuthActionTypes, TAuthActionTypes} from "../actions/AuthActions";
import { MiddlewareAPI, Dispatch } from "redux";
import socket from "./socket";

export interface IAuthState {
	user: IUser | undefined
}

const initialState: IAuthState = {
	user: undefined
};

export const loginMiddleware = (api: MiddlewareAPI) => (next: Dispatch) => (action: TAuthActionTypes) => {
	if (action.type === EAuthActionTypes.LOGIN) {
		const params = {
			userName: action.userName,
			password: action.password
		};
		console.log(params);
		socket.emit(EAuthActionTypes.LOGIN, JSON.stringify(params));
		return;
	}
	return next(action);
}

export const authReducer = (state = initialState, action: TAuthActionTypes): IAuthState => {
	switch (action.type) {
		case EAuthActionTypes.LOGIN:
			return state;
		case EAuthActionTypes.LOGOUT:
			return state;
		default:
			return state;
	}
};
