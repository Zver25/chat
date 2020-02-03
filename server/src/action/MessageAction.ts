import WebSocketController from "../controller/WebSocketController";
import Message from "../model/Message";
import RequestAction from "./RequestAction";

interface MessageParams {
	text: string
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
			const message: Message = new Message(user, request.text);
			messagesDB.add(message);
			server.emit('MESSAGE', message.toJson());
		}
		else {
			socket.emit('ERROR','Not authorized');
		}
	}

}

export default MessageAction;
