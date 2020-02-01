import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import {messagesReducer} from "./Messages";
import {pingMiddleware, pingPongReducer} from "./PingPong";
import { loginMiddleware } from "./Auth";

const rootReducer = combineReducers({
	messages: messagesReducer,
	pingPong: pingPongReducer,
});

const middleware = [
	pingMiddleware,
	loginMiddleware,
];

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
