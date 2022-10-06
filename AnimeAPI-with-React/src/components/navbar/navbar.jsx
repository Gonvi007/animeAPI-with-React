import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import vite from '../../assets/vite.svg'
import '../../index.scss'

function NavBar() {



  return (
    <div className="NavBar">
<Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img  src={vite}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Peliculas</Nav.Link>
            <Nav.Link href="#action2">Personajes</Nav.Link>
            <NavDropdown title="Otros" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Especies</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Vehiculos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Lugar
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export {NavBar}
