import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import {chatReducer} from "./Chat";
import {authReducer, loginMiddleware, registerMiddleware} from "./Auth";

const rootReducer = combineReducers({
	auth: authReducer,
	chat: chatReducer,
});

const middleware = [
	loginMiddleware,
	registerMiddleware,
];

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
