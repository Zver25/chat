import WebSocketController from "../controller/WebSocketController";
import RequestAction from "./RequestAction";
import {Server, Socket} from "socket.io";
import User from "../model/User";
import Message from "../model/Message";
import MessagesDB from "../model/MessagesDB";

class LogoutAction extends RequestAction {

	constructor(private connectionController: WebSocketController) {
		super();
	}

	public doAction(_: any) {
		const server: Server = this.connectionController.getServer();
		const socket: Socket = this.connectionController.getSocket();
		const user: User = this.connectionController.getUser();
		const messagesDB: MessagesDB = this.connectionController.getMessagesDB()
		if (user) {
			this.connectionController.setUser(undefined);
			const message: Message = new Message(undefined, `${user.getName()} disconnected`);
			messagesDB.add(message);
			server.emit('MESSAGE', message.toJson());
			socket.emit('LOGOUT_SUCCESS');	
		}
	}

}

export default LogoutAction;
