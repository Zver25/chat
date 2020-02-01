import WebSocketController from "../controller/WebSocketController";
import RequestAction from "./RequestAction";
import {Server, Socket} from "socket.io";
import User from "../model/User";

class LogoutAction extends RequestAction {

	constructor(private connectionController: WebSocketController) {
		super();
	}

	public doAction(_: any) {
		const server: Server = this.connectionController.getServer();
		const socket: Socket = this.connectionController.getSocket();
		const user: User = this.connectionController.getUser();
		if (user) {
			this.connectionController.setUser(undefined);
			server.emit('USER_DISCONNECTED', user.getName());
			socket.emit('LOGOUT_SUCCESS');	
		}
	}

}

export default LogoutAction;
