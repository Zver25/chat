import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import { Dispatch } from 'redux';

import {AppState} from "../store";
import AuthScreen from "./AuthScreen";
import { login, register } from '../actions/AuthActions';
import ChatScreen from './ChatScreen';
import { sendMessage } from '../actions/ChatActions';


const mapStateToProps = (state: AppState) => ({
	...state
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	login: (userName: string, password: string) => dispatch(login(userName, password)),
	register: (userName: string, password: string) => dispatch(register(userName, password)),
	sendMessage: (message: string) => dispatch(sendMessage(message)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

class App extends React.Component<PropsFromRedux> {

	render() {
		const {auth, chat, login, register} = this.props;
		console.log(auth);
		if (auth.user) {
			return <ChatScreen messages={chat.messages} onSendMessage={sendMessage}/>
		}
		return <AuthScreen onLogin={login} onRegister={register} />;
	}
}

export default connector(App);
