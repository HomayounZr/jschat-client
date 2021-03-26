import * as React from 'react';

import TextPM from './ChatMessageComponents/textPM';

const ChatMessagesDialog = ({ messages }) => {

    const messageContainer = React.useRef(null);

    React.useEffect(() => {
        messageContainer.current.scrollTop = messageContainer.current.scrollHeight;
    }, [messages]);

    return (
        <div style={{
            height: '100%',
            maxHeight: '32.5rem',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'scroll'
        }}
        ref={messageContainer}
        >
            {
                Array.prototype.map.call(messages, (item, index) => 
                    <TextPM key={index} messageObject={item} />
                )
            }
        </div>
    )
}

export default ChatMessagesDialog;