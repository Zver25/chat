import Message from "./Message";

class MessagesDB {

	private messages: Array<Message>;

	constructor() {
		this.messages = [];
	}

	add(message: Message) {
		this.messages.push(message);
	}

}

export default MessagesDB;