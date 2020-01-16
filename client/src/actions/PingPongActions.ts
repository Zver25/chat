import {EPingPongActionTypes} from "../store/PingPong";

interface IPingAction {
	type: typeof EPingPongActionTypes.PING
}

interface IChangePingAction {
	type: typeof EPingPongActionTypes.CHANGE_PING
	data: string
}

interface IPongAction {
	type: typeof EPingPongActionTypes.PONG
	data: string
}

export type TPingPongActionTypes = IPingAction | IChangePingAction | IPongAction;

export const ping = (): IPingAction => ({
	type: EPingPongActionTypes.PING
});
export const changePingData = (data: string): IChangePingAction => ({
	type: EPingPongActionTypes.CHANGE_PING,
	data
});
export const pong = (data: string): IPongAction => ({
	type: EPingPongActionTypes.PONG,
	data
});
