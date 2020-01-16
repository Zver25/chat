import User from "./User";

export default class Message {
	constructor(private user: User, private message: string, private time: bigint) {}
}