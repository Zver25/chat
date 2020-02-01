import React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {AppState} from "../store";
import {changePingData, ping} from "../actions/PingPongActions";
import AuthScreen from "./AuthScreen";

import './App.css';

const mapStateToProps = (state: AppState) => ({
	...state.pingPong
});

const mapDispatchToProps = {
	changePing: (data: string) => changePingData(data),
	ping: () => ping(),
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
		const {pingData, pongData, changePing} = this.props;
		return (
			<AuthScreen onLogin={console.log}/>
		);
	}
}

export default connector(App);
