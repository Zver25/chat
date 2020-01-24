import {RequestAction} from "./RequestAction";
import * as SocketIO from "socket.io";
import {Socket} from "socket.io";

export class PingPongAction implements RequestAction {

	public constructor(private io: SocketIO.Server, private socket: Socket) {
	}

	action(request: any) {
		this.socket.emit('PONG', request);
	}

}