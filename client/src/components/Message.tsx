import React from 'react';
import IUser from '../type/IUser';

interface MessageProps {
    user: IUser,
    text: string
}

const Message: React.FC<MessageProps> = (props: MessageProps) => (
    <div><b>{props.user.name}:</b>{props.text}</div>
);

export default Message;
