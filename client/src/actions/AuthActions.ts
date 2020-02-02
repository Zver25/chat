import IUser from "../type/IUser";

export enum EAuthActionTypes {
	LOGIN = 'LOGIN',
	LOGIN_SUCCESS = 'LOGIN_SUCCESS',
	LOGIN_FAIL = 'LOGIN_FAIL',
	REGISTER = 'REGISTER',
	REGISTER_SUCCESS = 'REGISTER_SUCCESS',
	REGISTER_FAIL = 'REGISTER_FAIL',
	LOGOUT = 'LOGOUT'
}

interface ILogin {
	type: typeof EAuthActionTypes.LOGIN,
	userName: string,
	password: string
}

interface ILoginSuccess {
	type: typeof EAuthActionTypes.LOGIN_SUCCESS,
	user: IUser
}

interface ILoginFail {
	type: typeof EAuthActionTypes.LOGIN_FAIL,
	error: string
}

interface ILogout {
	type: typeof EAuthActionTypes.LOGOUT
}

interface IRegister {
	type: typeof EAuthActionTypes.REGISTER,
	userName: string,
	password: string
}

interface IRegisterSuccess {
	type: typeof EAuthActionTypes.REGISTER_SUCCESS,
	user: IUser
}

interface IRegisterFail {
	type: typeof EAuthActionTypes.REGISTER_FAIL,
	error: string
}


export type TAuthActionTypes = 
	ILogin |
	ILoginSuccess |
	ILoginFail |
	ILogout |
	IRegister |
	IRegisterSuccess |
	IRegisterFail;

export const login = (userName: string, password: string): ILogin => ({
	type: EAuthActionTypes.LOGIN,
	userName, password
});

export const loginSuccess = (user: IUser): ILoginSuccess => ({
	type: EAuthActionTypes.LOGIN_SUCCESS,
	user
});

export const loginFail = (error: string): ILoginFail => ({
	type: EAuthActionTypes.LOGIN_FAIL,
	error
});

export const register = (userName: string, password: string): IRegister => ({
	type: EAuthActionTypes.REGISTER,
	userName, password
});

export const registerSuccess = (user: IUser): IRegisterSuccess => ({
	type: EAuthActionTypes.REGISTER_SUCCESS,
	user
});

export const registerFail = (error: string): IRegisterFail => ({
	type: EAuthActionTypes.REGISTER_FAIL,
	error
});

export const logout = (): ILogout => ({
	type: EAuthActionTypes.LOGOUT
});
