import {EChatActionTypes, TChatActionTypes, receiveMessage} from "../actions/ChatActions";
import IMessage from "../type/IMessage";
import { MiddlewareAPI, Dispatch } from "redux";
import socket from "./socket";
import { store } from ".";

export interface IChatState {
	messages: IMessage[]
}

const initialState: IChatState = {
	messages: []
};

export const sendMessageMiddleware = (api: MiddlewareAPI) => (next: Dispatch) => (action: TChatActionTypes) => {
	if (action.type === EChatActionTypes.SEND_MESSAGE) {
		const params = {
			text: action.text
		};
		socket.emit(EChatActionTypes.SEND_MESSAGE, params);
	}
	return next(action);
};

socket.on(EChatActionTypes.MESSAGE, (message: IMessage) => {
	store.dispatch(receiveMessage(message));
});

export const chatReducer = (state = initialState, action: TChatActionTypes): IChatState => {
	switch (action.type) {
		case EChatActionTypes.MESSAGE:
			return {
				...state,
				messages: [
					...state.messages,
					action.message
				]
			};
		default:
			return state;
	}
};
