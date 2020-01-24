import {Socket, Server} from "socket.io";
import {RequestAction} from "../action/RequestAction";
import {PingPongAction} from "../action/PingPongAction";

export class WebSocketController {

	public constructor(private io: Server, private socket: Socket) {
		this.addAction('PING', new PingPongAction(io, socket));
	}

	public addAction(event: string, action: RequestAction) {
		this.socket.on(event, action.action.bind(action));
	}

}