
export enum EAuthActionTypes {
	LOGIN = 'LOGIN',
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

export type TAuthActionTypes = ILogin | ILogout;

export const login = (userName: string, password: string): ILogin => ({
	type: EAuthActionTypes.LOGIN,
	userName, password
});

export const logout = (): ILogout => ({
	type: EAuthActionTypes.LOGOUT
});
