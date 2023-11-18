import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
export default function Header() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
            <Link to= '/'><Navbar.Brand > RandomChat</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

             <Link to='/home' className='btn btn-primary mr-2'> Home</Link>{'     '}
             <Link to='/randomchat' className='btn btn-primary mr-2'> Chat</Link>{'     '}
             <Link to = '/groupchat' className='btn btn-primary mr-2'>Group Chat</Link>{'     '}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}