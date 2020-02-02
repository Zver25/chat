import {EChatActionTypes, TChatActionTypes} from "../actions/ChatActions";
import IMessage from "../type/IMessage";

export interface IChatState {
	messages: IMessage[]
}

const initialState: IChatState = {
	messages: []
};

export const chatReducer = (state = initialState, action: TChatActionTypes): IChatState => {
	switch (action.type) {
		case EChatActionTypes.RECEIVE_MESSAGE:
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
