"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Http = require("http");
var Express = require("express");
var SocketIO = require("socket.io");
var ChatServer = /** @class */ (function () {
    function ChatServer() {
        this.createApp();
        this.createServer();
        this.createIO();
    }
    ChatServer.getPort = function () {
        return parseInt(process.env.PORT) || ChatServer.PORT;
    };
    ChatServer.getStatic = function () {
        return process.env.STATIC_PATH || ChatServer.STATIC_PATH;
    };
    ChatServer.prototype.createApp = function () {
        this.app = Express();
        this.serveStatic();
    };
    ChatServer.prototype.createServer = function () {
        this.server = Http.createServer(this.app);
        this.server.listen(ChatServer.getPort(), function () {
            console.log('Listen on port %s', ChatServer.getPort());
        });
    };
    ChatServer.prototype.createIO = function () {
        var _this = this;
        this.io = SocketIO(this.server);
        this.io.on('connection', function (socket) {
            console.log('Connected client');
            socket.on('message', function (message) {
                console.log('receive message = %s', JSON.stringify(message));
                _this.io.emit('message', message);
            });
            socket.on('PING', function (data) {
                console.log('PING: data = %s', JSON.stringify(data));
                socket.emit('PONG', data);
            });
        });
    };
    ChatServer.prototype.serveStatic = function () {
        console.log('Use path for static: %s', ChatServer.getStatic());
        this.app.use(Express.static(ChatServer.getStatic()));
    };
    ChatServer.prototype.getApp = function () {
        return this.app;
    };
    ChatServer.PORT = 3000;
    ChatServer.STATIC_PATH = '../client/build';
    return ChatServer;
}());
exports.ChatServer = ChatServer;
