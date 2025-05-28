import React, {useEffect, useState} from 'react';
import { Navbar, Nav, Image, NavDropdown, Offcanvas, Col, Container, Row, Card} from 'react-bootstrap'
import appStyles from '../App.module.css'

const NavBar = () => {

    // Initialize state variables
    const [expanded, setExpanded] = useState(false)

    // useEffect(() => {
    //     if (width > 767){
    //         setExpanded(false)
    //     }
    // }, [width])

    // Ensure nav bar is collapsed when user clicks another part of screen
    document.addEventListener('mouseup', (event) => {
        if (!event.target.classList.contains('offcanvas-body')){
            setExpanded(false) 
        }
    })

    const handleClick = () => {
        setExpanded(false)
    }


    return (
        <Navbar expand={'md'} expanded={expanded} sticky='top'>
            {/* LOGO */}
            <Navbar.Brand href="/">
                <h3 className={appStyles.horizMargin}>
                    Delta Indian Takeaway
                </h3>
            </Navbar.Brand>
            {/* HAMBURGER MENU TO EXPAND/COLLAPSE */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} onClick={() => setExpanded(true)}/>
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-md`}
                aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                placement="end"
            >
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className={`justify-content-end flex-grow-1 pe-3`}>
                        <Nav.Link href='/' onClick={handleClick}>Home</Nav.Link>
                        <Nav.Link href='/menu' onClick={handleClick}>Menu</Nav.Link>
                        <Nav.Link href='/about' onClick={handleClick}>About</Nav.Link>
                        <Nav.Link href='/location' onClick={handleClick}>Location</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
      	</Navbar>
    )
}

export default NavBar