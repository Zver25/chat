import WebSocketController from "../controller/WebSocketController";
import Message from "../model/Message";

class MessageAction {

	constructor(private connectionController: WebSocketController) {
	}

	public action(request: string) {
		const socket = this.connectionController.getSocket();
		const server = this.connectionController.getServer();
		const user = this.connectionController.getUser();
		const messagesDB = this.connectionController.getMessagesDB();
		if (user) {
			const message: Message = new Message(user, request);
			messagesDB.add(message);
			server.emit('RECEIVE_MESSAGE', message.toJson());
		}
		else {
			socket.emit('ERROR','Not authorized');
		}
	}

}

export default MessageAction;
