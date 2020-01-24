import {Server, Socket} from "socket.io";

import RequestAction from "./RequestAction";
import WebSocketController from "../controller/WebSocketController";
import UserDB from "../model/UserDB";
import User from "../model/User";

class LoginAction implements RequestAction {

	public constructor(private connectionController: WebSocketController) {
	}

	public action(request: string) {
		const userDB: UserDB = this.connectionController.getUserDB();
		const server: Server = this.connectionController.getServer();
		const socket: Socket = this.connectionController.getSocket();
		let user: User;
		try {
			user = userDB.findByName(request);
		} catch (e) {
			user = new User(request);
			userDB.add(user);
		}
		this.connectionController.setUser(user);
		server.emit('USER_CONNECTED', request);
		socket.emit('AUTH_SUCCESS');
	}

}

export default LoginAction;
