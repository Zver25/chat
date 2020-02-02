import IUser from "../type/IUser";
import {EAuthActionTypes, TAuthActionTypes, loginSuccess, loginFail, registerSuccess, registerFail} from "../actions/AuthActions";
import { MiddlewareAPI, Dispatch } from "redux";
import socket from "./socket";
import { store } from ".";

export interface IAuthState {
	user: IUser | undefined,
	sync: boolean,
	error: string | undefined
};

const initialState: IAuthState = {
	user: undefined,
	sync: false,
	error: undefined
};

export const loginMiddleware = (api: MiddlewareAPI) => (next: Dispatch) => (action: TAuthActionTypes) => {
	if (action.type === EAuthActionTypes.LOGIN) {
		const params = {
			userName: action.userName,
			password: action.password
		};
		socket.emit(EAuthActionTypes.LOGIN, JSON.stringify(params));
	}
	return next(action);
};

export const registerMiddleware = (api: MiddlewareAPI) => (next: Dispatch) => (action: TAuthActionTypes) => {
	if (action.type === EAuthActionTypes.REGISTER) {
		const params = {
			userName: action.userName,
			password: action.password
		};
		socket.emit(EAuthActionTypes.REGISTER, JSON.stringify(params));
	}
	return next(action);
};

socket.on(EAuthActionTypes.LOGIN_SUCCESS, (user: IUser) => {
	store.dispatch(loginSuccess(user));
});

socket.on(EAuthActionTypes.LOGIN_FAIL, (error: string) => {
	store.dispatch(loginFail(error));
});

socket.on(EAuthActionTypes.REGISTER_SUCCESS, (user: IUser) => {
	store.dispatch(registerSuccess(user));
});

socket.on(EAuthActionTypes.REGISTER_FAIL, (error: string) => {
	store.dispatch(registerFail(error));
});

export const authReducer = (state = initialState, action: TAuthActionTypes): IAuthState => {
	console.log(action);
	switch (action.type) {
		case EAuthActionTypes.LOGIN:
			return {
				...state,
				sync: true,
				error: undefined
			};
		case EAuthActionTypes.LOGIN_SUCCESS:
			return {
				...state,
				sync: false,
				user: action.user
			};
		case EAuthActionTypes.LOGIN_FAIL:
			return {
				...state,
				sync: false,
				error: action.error
			};
		case EAuthActionTypes.REGISTER:
			return {
				...state,
				sync: true,
				error: undefined
			};
		case EAuthActionTypes.REGISTER_SUCCESS:
			return {
				...state,
				sync: false,
				user: action.user
			};
		case EAuthActionTypes.REGISTER_FAIL:
			return {
				...state,
				sync: false,
				error: action.error
			};
		case EAuthActionTypes.LOGOUT:
			return {
				...state,
				sync: true,
				error: undefined
			};
		default:
			return state;
	}
};
