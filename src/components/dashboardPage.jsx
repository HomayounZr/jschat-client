import * as React from 'react';
import '../styles/dashboardStyles.css';
import {
    Card
} from 'react-bootstrap';

import MyNavbar from './myNavbar';
import MessageInputBar from './messageInputBar';
import ChatMessagesDialog from './chatMessagesDialog';
import ChatTitleBar from './chatTitleBar';

import { socket } from '../helpers/socketHelper';

const DashboardPage = (props) => {

    const [selectedUser, setSelectedUser] = React.useState(null);

    React.useEffect(() => {

        socket.emit('joinSocket', localStorage.getItem('_userId'));
        socket.on('welcome', socketId => console.log('connected'));

    }, []);

    const selectChat = (user) => {
        setSelectedUser(user);
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#1f1b24',
            }}
        >
            <MyNavbar currentPage="dashboard" selectChat={selectChat} />

            <Card className="mainDiv shadow-sm container">
                <div className="contactsPage">

                    <h4>My Chats</h4>
                    <hr />

                </div>

                <div className="chatPage shadow">
                    <div className="detailsBar">

                        <ChatTitleBar selectedUser={selectedUser} />

                    </div>
                    <div className="chatsDialog">

                        <ChatMessagesDialog />

                    </div>
                    <div className="inputDialog shadow">

                        <MessageInputBar selectedUser={selectedUser} />

                    </div>
                </div>
            </Card>
        </div>

    )
}

export default DashboardPage;