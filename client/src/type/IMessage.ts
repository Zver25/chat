import User from "./IUser";

export default interface IMessage {
	user: User
	message: string
	time: number
}
