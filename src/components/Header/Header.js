import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/Group 1329.png'
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">
                    <img src={logo} alt="" style={{height:'40px'}}/>
                </Navbar.Brand>
                <Nav className="mr-auto" >
                    <Nav.Link href="#home" >
                        <Link to='/' style={{textDecoration: 'none',color:'gray'}}>Home</Link>
                        </Nav.Link>
                    <Nav.Link href="#features">
                    <Link to='/dashboard' style={{textDecoration: 'none',color:'gray'}}>Dashboard</Link>
                    </Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />

                   <Link to="/admin">
                   <Button variant="outline-primary">Admin</Button>
                   </Link>
                  {loggedInUser&& <Link to="/login">
                   <Button variant="outline-success">Login</Button>
                   </Link>}
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;