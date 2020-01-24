import {Server, Socket} from "socket.io";

import WebSocketController from "./WebSocketController";
import UserDB from "../model/UserDB";
import MessagesDB from "../model/MessagesDB";

class ServerController {

	private readonly userDB: UserDB;
	private readonly messagesDB: MessagesDB;

	public constructor(private io: Server) {
		this.userDB = new UserDB();
		this.messagesDB = new MessagesDB();
		this.io.on('connect', (socket: Socket) => {
			console.log('User connected');
			let controller: WebSocketController = new WebSocketController(io, socket, this.userDB, this.messagesDB);
			socket.on('disconnect', () => {
				console.log('User disconnected');
				controller = undefined;
			});
		});
	}

}

export default ServerController;
