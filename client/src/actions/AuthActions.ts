
export enum EAuthActionTypes {
	LOGIN = 'LOGIN',
	REGISTER = 'REGISTER',
	LOGOUT = 'LOGOUT'
}

interface ILogin {
	type: typeof EAuthActionTypes.LOGIN,
	userName: string,
	password: string
}

interface ILogout {
	type: typeof EAuthActionTypes.LOGOUT
}

interface IRegister {
	type: typeof EAuthActionTypes.REGISTER,
	userName: string,
	password: string
}

export type TAuthActionTypes = ILogin | ILogout;

export const login = (userName: string, password: string): ILogin => ({
	type: EAuthActionTypes.LOGIN,
	userName, password
});

export const register = (userName: string, password: string): IRegister => ({
	type: EAuthActionTypes.REGISTER,
	userName, password
});

export const logout = (): ILogout => ({
	type: EAuthActionTypes.LOGOUT
});
