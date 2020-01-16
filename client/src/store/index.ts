import {applyMiddleware, combineReducers, createStore, Middleware, Reducer, Store} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import {messagesReducer} from "./Messages";
import {pingMiddleware, pingPongReducer} from "./PingPong";

const rootReducer = combineReducers({
	messages: messagesReducer,
	pingPong: pingPongReducer,
});

const middleware = [
	pingMiddleware,
];

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
