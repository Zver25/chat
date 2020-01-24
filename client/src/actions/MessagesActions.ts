import IMessage from "../type/IMessage";

export enum EMessagesActionTypes {
	SEND_MESSAGE = 'SEND_MESSAGE',
	RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
}

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
