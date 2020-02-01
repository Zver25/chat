import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './AuthScreen.css';


interface AuthScreenProps {
	onLogin: Function
}

const AuthScreen: React.FC<AuthScreenProps> = (props: AuthScreenProps) => {
	const {onLogin} = props;
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	return (
		<Paper className="login-form" elevation={4}>
			<Grid container direction="column" justify="center" alignItems="stretch" spacing={4}>
				<Grid item container justify="center">
					<Typography variant="h3">Chat</Typography>
				</Grid>
				<Grid item>
					<FormControl fullWidth>
						<TextField label="Enter user name" value={userName} 
							onChange={(e) => setUserName(e.target.value)}/>
					</FormControl>
				</Grid>
				<Grid item>
					<FormControl fullWidth>
						<TextField label="Enter password name" type="password" 
							value={password} onChange={(e) => setPassword(e.target.value)}/>
					</FormControl>
				</Grid>
				<Grid item container justify="center" direction="row">
					<Button variant="contained" color="primary" 
						onClick={() => onLogin(userName, password)}>Login</Button>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default AuthScreen;
