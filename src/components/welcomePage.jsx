import * as React from 'react';

import '../styles/globalStyles.css';

import {
    Card,
    Form,
    FormGroup,
    Button
} from 'react-bootstrap';
import {
    Link
} from 'react-router-dom';
import RestHelper from '../helpers/restHelper';
import { connectSocket } from '../helpers/socketHelper';

const WelcomePanelContext = React.createContext(null);
const WelcomePage = (props) => {

    const [currentPanel,setCurrentPanel] = React.useState(1);

    const panelContext = React.useMemo(() => ({
        changePanel: (index) => setCurrentPanel(index),
    }), []);

    React.useEffect(() => {
        RestHelper.configure();
    }, []);

    return (
        <div className="flexCenter">
            <Card className="shadow-sm" style={{padding: 30,paddingRight: 50,paddingLeft:50}}>
                <Card.Title>Welcome to JSChat</Card.Title>
                <Card.Subtitle>Chat experience with node.js & react</Card.Subtitle>

                <hr />
                <Card.Text>Create a new account or Login</Card.Text>

                <WelcomePanelContext.Provider value={panelContext}>
                    {
                        currentPanel == 0 ?
                        <SignupPanel /> :
                        <LoginPanel />
                    }
                </WelcomePanelContext.Provider>

            </Card>
        </div>
    )
}


const SignupPanel = ({}) => {

    const { changePanel } = React.useContext(WelcomePanelContext);

    const [fullname,setFullname] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [err,setErr] = React.useState('');

    const signup = async () => {
        try {
            const result = await RestHelper.users_signup(fullname,email,password);
            if(result.token !== undefined){
                const userId = result.userId;
                const token = result.token;

                localStorage.setItem('_userId', userId);
                localStorage.setItem('_token', token);
                RestHelper.setAuthHeader(token, userId);
                // connectSocket();
                window.location = '/dashboard';
            } else {
                setErr(result);
            }
        } catch (ex) {
            alert(ex);
        }
    }

    return (
        <div>
            <Form>
                {
                    err.length > 0 ?
                    <p
                        style={{
                            fontSize:16,
                            color:'#db3236',
                        }}
                    >
                        {err}
                    </p> :
                    null
                }
                <FormGroup controlId="signup_fullname">
                    <Form.Label>Fullname: </Form.Label>
                    <Form.Control type="text" placeholder="Fulname..." onChange={e => setFullname(e.target.value)} />
                </FormGroup>
                <FormGroup controlId="signup_email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" placeholder="Email..." onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup controlId="signup_password">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" placeholder="Password..." onChange={e => setPassword(e.target.value)} />
                </FormGroup>
            </Form>

            <div style={{
                display: 'flex',
            
            }}>
                <Button variant="outline-primary" onClick={changePanel.bind(this,1)} style={{width: '30%'}}>Login</Button>

                <Button variant="primary" type="submit" style={{width: '65%',marginLeft: '5%'}} onClick={signup}>
                    Create account
                </Button>
            </div>
        </div>
    )
}

const LoginPanel = ({}) => {
    
    const { changePanel } = React.useContext(WelcomePanelContext);
    
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [err,setErr] = React.useState('');

    const login = async () => {
        try {
            const result = await RestHelper.users_login(email,password);
            if(result.token !== undefined){
                const userId = result.userId;
                const token = result.token;

                localStorage.setItem('_userId', userId);
                localStorage.setItem('_token', token);
                RestHelper.setAuthHeader(token, userId);
                // connectSocket();
                window.location = '/dashboard';
            } else {
                setErr(result);
            }
        } catch (ex) {
            alert(ex);
        }
    }

    return (
        <div>
            <Form>
                {
                    err.length > 0 ?
                    <p
                        style={{
                            fontSize:16,
                            color:'#db3236',
                        }}
                    >
                        {err}
                    </p> :
                    null
                }
                
                <FormGroup controlId="signup_email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" placeholder="Email..." onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup controlId="signup_password">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" placeholder="Password..." onChange={e => setPassword(e.target.value)} />
                </FormGroup>
            </Form>

            <div style={{
                display: 'flex',
            
            }}>
                <Button variant="outline-primary" onClick={changePanel.bind(this,0)} style={{width:'30%'}}>Signup</Button>

                <Button variant="primary" type="submit" style={{width: '65%',marginLeft: '5%'}} onClick={login}>
                    Login
                </Button>
            </div>
        </div>
    )
}

export default WelcomePage;