import React from 'react';

interface SystemMessageProps {
    text: string
}

const SystemMessage: React.FC<SystemMessageProps> = (props: SystemMessageProps) => (
    <div style={{ fontStyle: 'italic' }}>{props.text}</div>
);

export default SystemMessage;
