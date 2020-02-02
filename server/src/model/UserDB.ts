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
		throw 'User not found';
	}

	public findByName(userName: string): User {
		for (let i = 0; i < this.users.length; i++) {
			if (this.users[i].getName() === userName) {
				return this.users[i];
			}
		}
		throw 'User not found';
	}

}

export default UserDB;
