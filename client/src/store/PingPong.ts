import {TPingPongActionTypes} from "../actions/PingPongActions";

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
