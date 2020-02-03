import User from "./User";

class Message {

	private readonly _time: number;
	constructor(private _user: User, private _text: string) {
		this._time = Date.now();
	}

	public toJson(): object {
		return {
			user: this._user ? this._user.toJson() : undefined,
			text: this._text,
			time: this._time
		};
	}

	public getUser(): User {
		return this._user;
	}

	public getMessage(): string {
		return this._text;
	}

	public getTime():number {
		return this._time;
	}

}

export default Message;
