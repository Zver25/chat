import {pong, TPingPongActionTypes} from "../actions/PingPongActions";
import {Dispatch, MiddlewareAPI} from "redux";

import socket from "./socket";
import {store} from "./index";

export enum EPingPongActionTypes {
	PING = 'PING',
	CHANGE_PING = 'CHANGE_PING',
	PONG = 'PONG'
}

export interface IPingPongState {
	pingData: string
	pongData: string
}

const initialState: IPingPongState = {
	pingData: '',
	pongData: ''
};

export const pingMiddleware = (api: MiddlewareAPI) => (next: Dispatch) => (action: TPingPongActionTypes) => {
	const state = api.getState();
	if (action.type === EPingPongActionTypes.PING) {
		socket.emit(EPingPongActionTypes.PING, state.pingPong.pingData);
	}
	return next(action);
};

socket.on(EPingPongActionTypes.PONG, (data: string) => {
	store.dispatch(pong(data));
});

export const pingPongReducer = (state: IPingPongState = initialState, action: TPingPongActionTypes) => {
	switch (action.type) {
		case EPingPongActionTypes.CHANGE_PING:
			return {
				...state,
				pingData: action.data
			};
		case EPingPongActionTypes.PONG:
			return {
				...state,
				pongData: action.data
			};
		default:
			return state;
	}
};
