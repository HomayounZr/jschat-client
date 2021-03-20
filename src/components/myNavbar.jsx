import * as React from 'react';
import {
    Navbar,
    Nav,
    Form,
    Card,
    Button,
} from 'react-bootstrap';
import RestHelper from '../helpers/restHelper';

const MyNavbar = ({ currentPage, selectChat }) => {

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
                        <SearchResultDialog selectChat={selectChat} />
                    </Nav>

                    <Nav.Link href="/" onClick={logout} style={{color: '#fff'}}>Logout</Nav.Link>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )

}

const SearchResultDialog = ({ selectChat }) => {

    const [typing, setTyping] = React.useState(false);
    const [text, setText] = React.useState('');
    const [users, setUsers] = React.useState([]);

    const searchInputChange = async (text) => {
        setText(text);
        if(String(text).length > 0){
            setTyping(true);
            try{
                const result = await RestHelper.users_searchUsername(text, 1);
                console.log(result);
                setUsers(result);
            } catch(ex) {
                console.log(ex);
            }
        } else {
            setTyping(false);
        }
    }

    const clearInput = () => {
        setTyping(false);
        setText('');
    }

    return (
        <div>
            <Form inline>
                <Form.Group>
                    <Form.Control placeholder="Search users..." value={text} onChange={e => searchInputChange(e.target.value)} />
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
                    <Card.Body style={{paddingTop: '0.25rem', paddingBottom: '0.25rem', paddingRight: '0.5rem', paddingLeft: '0.5rem'}}>
                        {
                            users.map((item, key) => 
                                <SearchItem key={key} item={item} selectChat={selectChat} clearInput={clearInput} />
                            )
                        }

                        {
                            users.length == 0 &&
                            <div>
                                <p>Nothing found</p>
                            </div>
                        }
                    </Card.Body>
                </Card>
            }
            
        </div>
    )
}


const SearchItem = ({ item, selectChat, clearInput }) => {

    const select = () => {
        clearInput();
        selectChat(item);
    }

    return (
        <Button
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
            }}
            variant="btn-light"
            onClick={select}
        >
            <div className="searchItemDiv">
                <p>{item.fullname}</p>
                <p>{item.email}</p>
            </div>
        </Button>
    )
}


export default MyNavbar;