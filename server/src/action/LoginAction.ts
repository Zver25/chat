import {Server, Socket} from "socket.io";

import RequestAction from "./RequestAction";
import WebSocketController from "../controller/WebSocketController";
import UserDB from "../model/UserDB";
import User from "../model/User";
import MessagesDB from "../model/MessagesDB";
import Message from "../model/Message";

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
		const messagesDB: MessagesDB = this.connectionController.getMessagesDB()
		let user: User;
		try {
			user = userDB.findByName(request.userName);
		} catch (e) {
			socket.emit('LOGIN_FAIL', JSON.stringify({ message: 'User not found' }));
			return;
		}
		if (user.checkPassword(request.password)) {
			this.connectionController.setUser(user);
			const message: Message = new Message(undefined, `${user.getName()} connected`);
			messagesDB.add(message);
			server.emit('MESSAGE', message.toJson());
			socket.emit('LOGIN_SUCCESS', user.toJson());
		}
		else {
			socket.emit('LOGIN_FAIL', JSON.stringify({ message: 'Wrong password' }));
		}
	}

}

export default LoginAction;
