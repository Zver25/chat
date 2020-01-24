import User from "./User";

class UserDB {

	private users: Array<User>;

	constructor() {
		this.users = [];
	}

	public add(user: User) {
		this.users.push(user);
	}

	public findByName(name: string): User {
		for (let i = 0; i < this.users.length; i++) {
			if (this.users[i].getName() === name) {
				return this.users[i];
			}
		}
		throw 'not found';
	}

}

export default UserDB;
