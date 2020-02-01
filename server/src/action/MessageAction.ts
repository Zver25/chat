import WebSocketController from "../controller/WebSocketController";
import Message from "../model/Message";
import RequestAction from "./RequestAction";

interface MessageParams {
	message: string
}

class MessageAction extends RequestAction {

	constructor(private connectionController: WebSocketController) {
		super();
	}

	public doAction(request: MessageParams) {
		const socket = this.connectionController.getSocket();
		const server = this.connectionController.getServer();
		const user = this.connectionController.getUser();
		const messagesDB = this.connectionController.getMessagesDB();
		if (user) {
			const message: Message = new Message(user, request.message);
			messagesDB.add(message);
			server.emit('RECEIVE_MESSAGE', message.toJson());
		}
		else {
			socket.emit('ERROR','Not authorized');
		}
	}

}

export default MessageAction;
