import {EMessagesActionTypes, TMessagesActionTypes} from "../actions/MessagesActions";
import IMessage from "../type/IMessage";

export interface IMessagesState {
	messages: IMessage[]
}

const initialState: IMessagesState = {
	messages: []
};

export const messagesReducer = (state = initialState, action: TMessagesActionTypes): IMessagesState => {
	switch (action.type) {
		case EMessagesActionTypes.RECEIVE_MESSAGE:
			return {
				messages: [
					...state.messages,
					action.message
				]
			};
		default:
			return state;
	}
};
