import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
export default function Header() {
  const online = {
    color:'white',
  }
  const onlinecount = {
    color:'#0d6efd',
  }
  const navlinks = {
    
  }
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark"className="fixed-top">
        <Container>
            <Link to= '/'><Navbar.Brand > RandomChat</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
         
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto">

             <Link to='/home' className='btn btn-primary mr-5'style={{marginRight:'6px'}}> Home</Link>{'     '}
             <Link to='/randomchat' className='btn btn-primary mr-5' style={{marginRight:'6px'}}> Chat</Link>{'     '}
             <Link to = '/groupchat' className='btn btn-primary mr-5' style={{marginRight:'6px'}}>Group Chat</Link>{'     '}
              
            </Nav>
          </Navbar.Collapse>
          <Navbar.Text className="justify-content-end d-flex align-items-center">
            <div className="d-flex align-items-baseline">
              <h3 className="mb-0 mr-2" style={online}>Online:</h3>
              <h2 className="mb-0 " style={onlinecount}>23</h2>
            </div>
          </Navbar.Text>
        </Container>
      </Navbar>
    );
}