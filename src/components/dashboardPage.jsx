import * as React from 'react';
import '../styles/dashboardStyles.css';
import {
    Card
} from 'react-bootstrap';
import MyNavbar from './myNavbar';
import MessageInputBar from './messageInputBar';

import SocketHelper from '../helpers/socketHelper';

const DashboardPage = (props) => {

    React.useEffect(() => {

        SocketHelper.connectSocket();
        SocketHelper.getSocket().emit('joinSocket', localStorage.getItem('_userId'));
        SocketHelper.getSocket().on('welcome', socketId => console.log('connected'));

    }, []);

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
            <MyNavbar currentPage="dashboard" />

            <Card className="mainDiv shadow-sm container">
                <div className="contactsPage">

                    <h4>My Chats</h4>
                    <hr />

                </div>

                <div className="chatPage">
                    <div className="detailsBar"></div>
                    <div className="chatsDialog"></div>
                    <div className="inputDialog">

                        <MessageInputBar />

                    </div>
                </div>
            </Card>
        </div>

    )
}

export default DashboardPage;