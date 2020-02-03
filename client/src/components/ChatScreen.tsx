import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import IMessage from '../type/IMessage';
import Message from './Message';
import SystemMessage from './SystemMessage';
import './ChatScreen.css';

interface ChatScreenProps {
    messages: Array<IMessage>,
    onSendMessage: (message: string) => void
}

const ChatScreen: React.FC<ChatScreenProps> = (props: ChatScreenProps) => {
    const {messages, onSendMessage} = props;
    const [text, setText] = useState('');
    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            onSendMessage(text);
            setText('');
        }
    };
    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    return (
        <Grid className={'chat-screen'} container direction="column" 
            justify="center" alignItems="stretch">
            <Grid item>
                {messages.map((message: IMessage) => message.user 
                    ? <Message key={message.time} user={message.user} text={message.text} />
                    : <SystemMessage key={message.time} text={message.text}/>
                )}
            </Grid>
            <Grid item>
                <FormControl fullWidth>
                    <TextField multiline value={text} 
                        onKeyDown={handleKeyPress}
                        onChange={handleChangeText}/>
                </FormControl>
            </Grid>
        </Grid>
    );
}

export default ChatScreen;
