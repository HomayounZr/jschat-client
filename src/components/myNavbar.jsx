import * as React from 'react';

import {
    Navbar,
    Nav,
    Form,
    Card,
} from 'react-bootstrap';

const MyNavbar = ({ currentPage }) => {

    const logout = () => {
        localStorage.removeItem('_userId');
        localStorage.removeItem('_token');
    }

    return (
        <Navbar expand="lg" bg="#1f1b24" className="shadow-md" variant="dark" style={{width: '100%'}}>
            <div className="container">
                <Navbar.Brand href="#">JS-Chat</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <SearchResultDialog />
                    </Nav>

                    <Nav.Link href="/" onClick={logout} style={{color: '#fff'}}>Logout</Nav.Link>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )

}

const SearchResultDialog = () => {

    const [typing, setTyping] = React.useState(false);
    const [text, setText] = React.useState('');

    const searchInputChange = (text) => {
        setText(text);
        if(String(text).length > 0){
            setTyping(true);
        } else {
            setTyping(false);
        }
    }

    return (
        <div>
            <Form inline>
                <Form.Group>
                    <Form.Control placeholder="Search users..." onChange={e => searchInputChange(e.target.value)} />
                </Form.Group>
            </Form>

            {
                typing && 
                // <div className="searchResultDialog shadow-lg">
                //     <strong>Results for {text}</strong>
                // </div>
                <Card className="searchResultDialog shadow">
                    <Card.Title>Search Results</Card.Title>
                    <Card.Subtitle>Results for {text}</Card.Subtitle>
                    <hr />
                    <Card.Body>
                    </Card.Body>
                </Card>
            }
            
        </div>
    )
}

export default MyNavbar;