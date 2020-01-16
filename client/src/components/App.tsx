import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import './App.css';
import {AppState} from "../store";
import {changePingData} from "../store/PingPong";

const mapStateToProps = (state: AppState) => ({
	...state.pingPong
});

const mapDispatchToProps = {
	changePing: (data: string) => changePingData(data),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

class App extends React.Component<PropsFromRedux> {
	render() {
		const {pingData, pongData, changePing} = this.props;
		return (
			<div className="App">
				<div>PONG: {pongData}</div>
				<input value={pingData} onChange={(e) => changePing(e.target.value)}/>
			</div>
		);
	}
}

export default connector(App);
