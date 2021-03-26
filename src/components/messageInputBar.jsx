import * as React from 'react';
import '../styles/messageInputBarStyles.css';

import {
    Button,
    Input
} from 'react-bootstrap';
import { socket } from '../helpers/socketHelper';

const MessageInputBar = ({ selectedUser, addNewMessage }) => {

    const [text, setText] = React.useState('');

    const onInputChange = (e) => {
        const input = e.target.value;
        setText(input);
    }

    // React.useEffect(() => {
    //     socket.on('newTextPM',data => {
    //         const rawData = JSON.parse(data);
    //         if(rawData.isMe){
    //             addNewMessage(rawData);
    //         } else {
    //             if(selectedUser != null && String(rawData.userId).localeCompare(String(selectedUser._id)) == 0){
    //                 addNewMessage(rawData);
    //             }
    //         }
    //     })
    // }, []);

    const sendMessage = () => {
        socket.emit(
            'sendTextPM',
            localStorage.getItem('_userId'),
            selectedUser._id,
            text
        );
        setText('');
    }

    return(
        <div className="barStyle">
            <Button variant="outline-primary btnAttach">+</Button>

            <input 
                className="form-control inputStyle"
                placeholder="Type your message..." 
                onChange={onInputChange}
                value={text}
                />

            <Button 
                variant="primary btnSend"
                onClick={sendMessage}
            >
                Send
            </Button>
        </div>
    )
}

export default MessageInputBar;