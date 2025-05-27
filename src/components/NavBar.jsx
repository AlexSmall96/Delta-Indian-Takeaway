import React from "react"
import { Link } from 'react-router-dom/cjs/react-router-dom';

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to='/'>Delta Indian Takeaway</Link>
            </li>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/menu'>Menu</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/location'>Location</Link>
            </li>
        </ul>
    )
};

export default NavBar
