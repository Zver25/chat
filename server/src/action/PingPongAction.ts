import {Server, Socket} from "socket.io";

import RequestAction from "./RequestAction";

class PingPongAction extends RequestAction {

	public constructor(private io: Server, private socket: Socket) {
		super();
	}

	doAction(request: any) {
		this.socket.emit('PONG', request);
	}

}

export default PingPongAction;
