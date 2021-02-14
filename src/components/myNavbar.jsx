import * as React from 'react';

import {
    Navbar,
    Nav,
    Form
} from 'react-bootstrap';

const MyNavbar = ({ currentPage }) => {

    return (
        <Navbar expand="lg" bg="primary" className="shadow-md" variant="dark" style={{width: '100%'}}>
            <div className="container">
                <Navbar.Brand href="#">JS-Chat</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Form inline>
                            <Form.Group>
                                <Form.Control placeholder="Search users..." />
                            </Form.Group>
                        </Form>
                    </Nav>

                    <Nav.Link href="#" style={{color: '#fff'}}>Logout</Nav.Link>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )

}

export default MyNavbar;