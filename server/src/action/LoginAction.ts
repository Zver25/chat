import {Server, Socket} from "socket.io";

import RequestAction from "./RequestAction";
import WebSocketController from "../controller/WebSocketController";
import UserDB from "../model/UserDB";
import User from "../model/User";

interface ILoginParams {
	userName: string,
	password: string
}

class LoginAction extends RequestAction {

	public constructor(private connectionController: WebSocketController) {
		super();
	}

	public doAction(request: ILoginParams) {
		const userDB: UserDB = this.connectionController.getUserDB();
		const server: Server = this.connectionController.getServer();
		const socket: Socket = this.connectionController.getSocket();
		let user: User;
		try {
			user = userDB.findByName(request.userName);
		} catch (e) {
			socket.emit('AUTH_FAIL', JSON.stringify({ message: 'User not found' }));
			return;
		}
		if (user.checkPassword(request.password)) {
			this.connectionController.setUser(user);
			server.emit('USER_CONNECTED', request.userName);
			socket.emit('AUTH_SUCCESS');
		}
		else {
			socket.emit('AUTH_FAIL', JSON.stringify({ message: 'Wrong password' }));
		}
	}

}

export default LoginAction;
