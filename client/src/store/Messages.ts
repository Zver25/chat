import {RECEIVE_MESSAGE, SEND_MESSAGE} from "../actions/MessagesActions";
import IMessage from "../type/IMessage";
import IMessagesState from "../type/IMessagesState";

interface ISentMessage {
	type: typeof SEND_MESSAGE,
	message: IMessage
}

interface IReceiveMessage {
	type: typeof RECEIVE_MESSAGE,
	message: IMessage
}

type MessagesActionTypes = ISentMessage | IReceiveMessage;

export const sendMessage = (message: IMessage): MessagesActionTypes => ({ type: SEND_MESSAGE, message });
export const receiveMessage = (message: IMessage): MessagesActionTypes => ({ type: RECEIVE_MESSAGE, message });

const initialState: IMessagesState = {
	messages: []
};

export const messagesReducer = (state = initialState, action: MessagesActionTypes): IMessagesState => {
	switch (action.type) {
		case RECEIVE_MESSAGE:
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
