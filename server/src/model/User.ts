import * as bcrypt from 'bcrypt';

const saltRounds = 10;

class User {

	private static counter: number = 1;
	private _id: number;
	private _password: string;
	private _token: string;

	constructor(private _name: string) {
		this._id = User.counter++;
		this._token = '';
	}

	public toJson(): object {
		return {
			id: this._id,
			name: this._name,
			token: this._token
		}
	}

	public getId(): number {
		return this._id;
	}

	public getName(): string {
		return this._name;
	}

	public setPassword(password: string) {
		this._password = bcrypt.hashSync(password, saltRounds);
	}

	public checkPassword(password: string): boolean {
		return bcrypt.compareSync(password, this._password);
	}

	public setToken(token: string) {
		this._token = token;
	}

	public getToken(): string {
		return this._token;
	}

}

export default User;
