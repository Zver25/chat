import User from "./IUser";

export default interface IMessage {
	user: User | undefined,
	text: string,
	time: number,
}
