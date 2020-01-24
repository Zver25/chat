import {Server, Socket} from "socket.io";

import RequestAction from "./RequestAction";

class PingPongAction implements RequestAction {

	public constructor(private io: Server, private socket: Socket) {
	}

	action(request: any) {
		this.socket.emit('PONG', request);
	}

}

export default PingPongAction;
