import IMessage from "../type/IMessage";

export enum EChatActionTypes {
	SEND_MESSAGE = 'SEND_MESSAGE',
	MESSAGE = 'MESSAGE',
}

interface ISentMessage {
	type: typeof EChatActionTypes.SEND_MESSAGE,
	text: string
}

interface IReceiveMessage {
	type: typeof EChatActionTypes.MESSAGE,
	message: IMessage
}

export type TChatActionTypes = ISentMessage | IReceiveMessage;

export const sendMessage = (text: string): ISentMessage => ({
	type: EChatActionTypes.SEND_MESSAGE,
	text
});

export const receiveMessage = (message: IMessage): IReceiveMessage => ({
	type: EChatActionTypes.MESSAGE,
	message
});
