import * as Http from 'http';
import * as Express from 'express';
import * as SocketIO from 'socket.io';

import Message from "./model/Message";

export class ChatServer {
	public static readonly PORT: number = 3000;
	public static readonly STATIC_PATH: string = '../client/build';

	private app: Express.Application;
	private server: Http.Server;
	private io: SocketIO.Server;

	public static getPort(): number {
		return parseInt(process.env.PORT) || ChatServer.PORT;
	}

	public static getStatic(): string {
		return process.env.STATIC_PATH || ChatServer.STATIC_PATH;
	}

	public constructor() {
		this.createApp();
		this.createServer();
		this.createIO();
	}

	private createApp(): void {
		this.app = Express();
		this.serveStatic();
	}

	private createServer(): void {
		this.server = Http.createServer(this.app);
		this.server.listen(ChatServer.getPort(), () => {
			console.log('Listen on port %s', ChatServer.getPort());
		});
	}

	private createIO(): void {
		this.io = SocketIO(this.server);
		this.io.on('connection', (socket) => {
			console.log('Connected client');
			socket.on('message', (message: Message) => {
				console.log('receive message = %s', JSON.stringify(message));
				this.io.emit('message', message);
			});
			socket.on('PING', (data) => {
				console.log('PING: data = %s', JSON.stringify(data));
				socket.emit('PONG', data);
			})
		});
	}

	private serveStatic(): void {
		console.log('Use path for static: %s', ChatServer.getStatic());
		this.app.use(Express.static(ChatServer.getStatic()));
	}

	public getApp(): Express.Application {
		return this.app;
	}
}