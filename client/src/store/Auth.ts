import IUser from "../type/IUser";
import {EAuthActionTypes, TAuthActionTypes} from "../actions/AuthActions";
import { MiddlewareAPI, Dispatch } from "redux";
import socket from "./socket";

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
		return;
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
		return;
	}
	return next(action);
};

export const authReducer = (state = initialState, action: TAuthActionTypes): IAuthState => {
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
