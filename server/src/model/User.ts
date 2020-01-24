class User {

	constructor(private _name: string) {}

	public toJson(): object {
		return {
			name: this._name
		}
	}

	public getName(): string {
		return this._name;
	}
}

export default User;
