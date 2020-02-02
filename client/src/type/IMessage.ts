import User from "./IUser";

export default interface IMessage {
	user: User | undefined,
	message: string,
	time: number,
}
