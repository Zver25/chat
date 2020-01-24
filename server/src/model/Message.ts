import User from "./User";

class Message {

	private readonly _time: number;
	constructor(private _user: User, private _message: string) {
		this._time = Date.now();
	}

	public toJson(): object {
		return {
			user: this._user.toJson(),
			message: this._message,
			time: this._time
		};
	}

	public getUser(): User {
		return this._user;
	}

	public getMessage(): string {
		return this._message;
	}

	public getTime():number {
		return this._time;
	}

}

export default Message;
