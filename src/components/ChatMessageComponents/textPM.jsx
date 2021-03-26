import * as React from 'react';
import {
} from 'react-bootstrap';
import '../../styles/textPMStyles.css';

const TextPM = ({ messageObject }) => {

    const {
        message, userId, fullname, isSeen, create, isMe
    } = messageObject;
    const myId = localStorage.getItem('_userId');

    let date = new Date(create);
    return(
        <div
            className={isMe ? "myMessage" : "othersMessage"}
        >
            {/* <p
                style={{
                    textAlign: 'right',
                }}
            >{fullname}</p> */}
            <p
                className="messageBody"
                style={{
                    textAlign: isMe ? "right" : "left",
                }}
            >
                {message}
            </p>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <p
                    className="smallDetails"
                    style={{marginRight: 10}}
                >
                    {
                        date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes()
                    }
                </p>
                <p
                    className="smallDetails"
                >
                    {
                        isSeen == true ?
                        'Seen' :
                        'Received'
                    }
                </p>
            </div>
        </div>
    )
}

export default TextPM;