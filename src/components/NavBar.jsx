import React, {useEffect, useState} from 'react';
import { Navbar, Nav, Image, NavDropdown, Offcanvas, Col, Container, Row, Card} from 'react-bootstrap'
import appStyles from '../App.module.css'
import styles from '../styles/NavBar.module.css'
import useWindowDimensions from '../hooks/useWindowDimensions';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {

    // Initialize state variables
    const [expanded, setExpanded] = useState(false)
    const { width } = useWindowDimensions()
    const location = useLocation();

    useEffect(() => {
        if (width > 767){
            setExpanded(false)
        }
    }, [width])

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
        <Navbar expand={'md'} expanded={expanded} sticky='top' className={styles.navbar}>
            {/* LOGO */}
            <Navbar.Brand href="/">
                <Image src='https://res.cloudinary.com/dojzptdbc/image/upload/v1749027827/delta_logo2_qi3w7r.png' width={150} className={appStyles.horizMargin} />
            </Navbar.Brand>
            {/* HAMBURGER MENU TO EXPAND/COLLAPSE */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} onClick={() => setExpanded(true)}/>
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-md`}
                aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                placement="end"
                className={styles.offcanvas}
            >
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body key={location.pathname}> 
                    <Nav className={`justify-content-end flex-grow-1 pe-3`}>
                        <Nav.Link as={Link} className={`${location.pathname === '/'? 'active' : ''} ${styles.grey}`} to='/' onClick={handleClick}>Home</Nav.Link>
                        <Nav.Link as={Link} className={`${location.pathname === '/menu'? 'active' : ''} ${styles.grey}`} to='/menu' onClick={handleClick}>Menu</Nav.Link>
                        <Nav.Link as={Link} className={`${location.pathname === '/about'? 'active' : ''} ${styles.grey}`} to='/about' onClick={handleClick}>About</Nav.Link>
                        <Nav.Link as={Link} className={`${location.pathname === '/location'? 'active' : ''} ${styles.grey}`} to='/location' onClick={handleClick}>Location</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
      	</Navbar>
    )
}

export default NavBar