import React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {AppState} from "../store";
import {changePingData, ping} from "../actions/PingPongActions";
import AuthScreen from "./AuthScreen";
import { login, register } from '../actions/AuthActions';

import './App.css';

const mapStateToProps = (state: AppState) => ({
	...state.pingPong
});

const mapDispatchToProps = {
	changePing: (data: string) => changePingData(data),
	ping: () => ping(),
	login: (userName: string, password: string) => login(userName, password),
	register: (userName: string, password: string) => register(userName, password),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

class App extends React.Component<PropsFromRedux> {

	handleKeyEnter = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			this.props.ping();
		}
	};

	render() {
		const {login} = this.props;
		return (
			<AuthScreen onLogin={login}/>
		);
	}
}

export default connector(App);
