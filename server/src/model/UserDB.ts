import User from "./User";

class UserDB {

	private users: Array<User>;

	constructor() {
		this.users = [];
	}

	public add(user: User) {
		this.users.push(user);
	}

	public findById(id: number): User {
		for (let i = 0; i < this.users.length; i++) {
			if (this.users[i].getId() === id) {
				return this.users[i];
			}
		}
		throw 'Not found';
	}

	public findByName(name: string): User {
		for (let i = 0; i < this.users.length; i++) {
			if (this.users[i].getName() === name) {
				return this.users[i];
			}
		}
		throw 'Not found';
	}

}

export default UserDB;
