import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import IMessage from '../type/IMessage';

interface ChatScreenProps {
    messages: Array<IMessage>,
    onSendMessage: (message: string) => void
}

const ChatScreen: React.FC<ChatScreenProps> = (props: ChatScreenProps) => {
    const {messages, onSendMessage} = props;
    const [message, setMessage] = useState('');
    return (
        <Grid container direction="column" justify="center" alignItems="stretch">
            <Grid item xs={'auto'}>

            </Grid>
            <Grid item xs={1}>
                <TextField multiline value={message} onChange={(e) => setMessage(e.target.value)}/>
            </Grid>
        </Grid>
    );
}

export default ChatScreen;
