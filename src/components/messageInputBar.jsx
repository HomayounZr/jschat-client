import * as React from 'react';
import '../styles/messageInputBarStyles.css';

import {
    Button,
    Input
} from 'react-bootstrap';

const MessageInputBar = ({}) => {
    return(
        <div className="barStyle">
            <Button variant="outline-primary btnAttach">+</Button>
            <input className="form-control inputStyle" placeholder="Type your message..." />
            <Button variant="primary btnSend">Send</Button>
        </div>
    )
}

export default MessageInputBar;