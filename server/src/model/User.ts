class User {

	private _password: sring;
	private _token: string;

	constructor(private _id: number, private _name: string) {}

	public toJson(): object {
		return {
			name: this._name
		}
	}

	public getName(): string {
		return this._name;
	}

	public setPassword(password: string) {
		this._password = password;
	}

	public getPassword(): string {
		return this._password;
	}

	public setToken(token: string) {
		this._token = token;
	}

	public getToken(): string {
		return this._token;
	}

}

export default User;
