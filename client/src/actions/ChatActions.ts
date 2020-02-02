import IMessage from "../type/IMessage";

export enum EChatActionTypes {
	SEND_MESSAGE = 'SEND_MESSAGE',
	RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
}

interface ISentMessage {
	type: typeof EChatActionTypes.SEND_MESSAGE,
	message: string
}

interface IReceiveMessage {
	type: typeof EChatActionTypes.RECEIVE_MESSAGE,
	message: IMessage
}

export type TChatActionTypes = ISentMessage | IReceiveMessage;

export const sendMessage = (message: string): ISentMessage => ({
	type: EChatActionTypes.SEND_MESSAGE,
	message
});

export const receiveMessage = (message: IMessage): IReceiveMessage => ({
	type: EChatActionTypes.RECEIVE_MESSAGE,
	message
});
