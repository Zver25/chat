import IMessage from "../type/IMessage";
import {EMessagesActionTypes} from "../store/Messages";

interface ISentMessage {
	type: typeof EMessagesActionTypes.SEND_MESSAGE,
	message: IMessage
}

interface IReceiveMessage {
	type: typeof EMessagesActionTypes.RECEIVE_MESSAGE,
	message: IMessage
}

export type TMessagesActionTypes = ISentMessage | IReceiveMessage;

export const sendMessage = (message: IMessage): ISentMessage => ({
	type: EMessagesActionTypes.SEND_MESSAGE,
	message
});
export const receiveMessage = (message: IMessage): IReceiveMessage => ({
	type: EMessagesActionTypes.RECEIVE_MESSAGE,
	message
});
