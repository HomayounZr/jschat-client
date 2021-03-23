import * as React from 'react';
import {
    Nav,
    Navbar
} from 'react-bootstrap';
import '../styles/chatTitleBarStyles.css';

const ChatTitleBar = ({ selectedUser }) => {

    return (
        <div>
            <Navbar bg="primary" className="shadow-sm" style={{borderRadius: 5}}>
                <Navbar.Brand className="userDetails">
                    <img
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                        }}
                        src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
                    />

                    <div
                        style={{
                            justifyContent: 'space-around',
                            marginLeft: 20
                        }}
                    >
                        <p
                            style={{
                                color: '#fff',
                                fontSize: 18,
                                margin: 0,
                            }}
                        >
                            {selectedUser?.fullname}
                        </p>
                        <p
                            style={{
                                color: '#e8e8e8',
                                fontSize: 16,
                                margin: 0
                            }}
                        >
                            {selectedUser?.email}
                        </p>
                    </div>
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default ChatTitleBar;