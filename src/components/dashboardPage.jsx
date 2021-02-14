import * as React from 'react';
import '../styles/dashboardStyles.css';
import {
    Card
} from 'react-bootstrap';
import MyNavbar from './myNavbar';
import MessageInputBar from './messageInputBar';

const DashboardPage = (props) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#007bff',
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