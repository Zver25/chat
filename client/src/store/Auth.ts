import IUser from "../type/IUser";
import {EAuthActionTypes, TAuthActionTypes} from "../actions/AuthActions";

export interface IAuthState {
	user: IUser | undefined
}

const initialState: IAuthState = {
	user: undefined
};

export const authReducer = (state = initialState, action: TAuthActionTypes): IAuthState => {
	switch (action.type) {
		case EAuthActionTypes.LOGIN:
			return state;
		case EAuthActionTypes.LOGOUT:
			return state;
		default:
			return state;
	}
};
