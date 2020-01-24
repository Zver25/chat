import {Server, Socket} from "socket.io";
import {WebSocketController} from "./WebSocketController";

export class ServerController {

	public constructor(private io: Server) {
		io.on('connect', (socket: Socket) => {
			console.log('User connected');
			let controller: WebSocketController = new WebSocketController(io, socket);
			socket.on('disconnect', () => {
				console.log('User disconnected');
				controller = undefined;
			});
		});
	}

}
