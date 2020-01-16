import {combineReducers} from "redux";

import {messagesReducer} from "./Messages";
import {pingPongReducer} from "./PingPong";

const rootReducer = combineReducers({
	messages: messagesReducer,
	pingPong: pingPongReducer,
});

export type AppState = ReturnType<typeof rootReducer>;