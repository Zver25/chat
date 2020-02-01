import * as bcrypt from 'bcrypt';

const saltRounds = 10;

class User {

	private static counter: number = 1;
	private _id: number;
	private _password: string;
	private _token: string;

	constructor(private _name: string) {
		this._id = User.counter++;
	}

	public toJson(): object {
		return {
			name: this._name
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
