import React from 'react';

import './AuthScreen.css';

interface AuthScreenProps {
	onLogin: Function
}

const AuthScreen: React.FC<AuthScreenProps> = (props: AuthScreenProps) => {

	return (
		<div className={'login-screen'}>

		</div>
	);
};

export default AuthScreen;
