import {Server, Socket} from "socket.io";

import User from "../model/User";
import UserDB from "../model/UserDB";
import MessagesDB from "../model/MessagesDB";
import PingPongAction from "../action/PingPongAction";
import LoginAction from "../action/LoginAction";
import MessageAction from "../action/MessageAction";
import RequestAction from "../action/RequestAction";
import LogoutAction from "../action/LogoutAction";

class WebSocketController {

	private user: User;

	public constructor(private io: Server, private socket: Socket, private userDB: UserDB, private messagesDB: MessagesDB) {
		this.addAction('PING', new PingPongAction(io, socket));
		this.addAction('LOGIN', new LoginAction(this));
		this.addAction('LOGOUT', new LogoutAction(this));
		this.addAction('SEND_MESSAGE', new MessageAction(this));
	}

	public addAction(event: string, action: RequestAction) {
		this.socket.on(event, action.action.bind(action));
	}

	public getServer(): Server {
		return this.io;
	}

	public getSocket(): Socket {
		return this.socket;
	}

	public getUserDB(): UserDB {
		return this.userDB;
	}

	public getMessagesDB(): MessagesDB {
		return this.messagesDB;
	}

	public getUser(): User {
		return this.user;
	}

	public setUser(user: User) {
		this.user = user;
	}

}

export default WebSocketController;
