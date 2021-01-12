import React from 'react'
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <div>
            <ul className="nav-list">
                <li className="list-item">
                    <Link className="link" to='/'>Home</Link>
                </li>
                <li className="list-item">
                    <Link className="link" to='/about'>About</Link>
                </li>
                <li className="list-item">
                    <Link className="link" to='/projects'>Projects</Link>
                </li>
                <li className="list-item">
                    <Link className="link" to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
