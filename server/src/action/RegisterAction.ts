import {Server, Socket} from "socket.io";

import RequestAction from "./RequestAction";
import WebSocketController from "../controller/WebSocketController";
import UserDB from "../model/UserDB";
import User from "../model/User";

interface IRegisterParams {
	userName: string,
	password: string
}

class RegisterAction extends RequestAction {

    public constructor(private connectionController: WebSocketController) {
		super();
    }

    public doAction(request: IRegisterParams) {
        const userDB: UserDB = this.connectionController.getUserDB();
		const server: Server = this.connectionController.getServer();
		const socket: Socket = this.connectionController.getSocket();
        let user: User;
        try {
            user = userDB.findByName(request.userName);
            socket.emit('REGISTER_FAIL', JSON.stringify({ message: 'User already exists' }));
		} catch (e) {
            user = new User(request.userName);
            user.setPassword(request.password);
            userDB.add(user);
            this.connectionController.setUser(user);
            server.emit('USER_CONNECTED', request.userName);
            socket.emit('REGISTER_SUCCESS', JSON.stringify(user.toJson()));
		}
    }
    
}

export default RegisterAction;
