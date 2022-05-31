import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' className='back-col '>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={50} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto na-font">
                            <Nav.Link className='back-color' as={Link} to="home">Home</Nav.Link>
                        </Nav>
                        <Nav className='na-font'>
                            <Nav.Link className='back-color mx-2' as={Link} to="blogs">Blogs</Nav.Link>
                            <Nav.Link className='back-color mx-2' href="home#cars">Car Inventory</Nav.Link>
                            <Nav.Link className='back-color mx-2' as={Link} to="all-items">All Items</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link className='back-color mx-2' as={Link} to="manage-items">Manage Items</Nav.Link>
                                    <Nav.Link className='back-color mx-2' as={Link} to="add-item">Add Item</Nav.Link>
                                    <Nav.Link className='back-color mx-2' as={Link} to="myItems">My Items</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button className="back-color mx-2 signOut_click navbar button-24" onClick={handleSignOut}>Sign out</button>
                                    :
                                    <Nav.Link className='back-color mx-2' as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;