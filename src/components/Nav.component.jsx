import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <StyledNav>
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
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    * {
        background-color: transparent;
    }
    .nav-list {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: calc(12px + (28 - 12) * ((100vw - 300px) / (2560 - 300)));
        list-style: none;
        height: 6vh;
    }
    .list-item {
        .link {
            padding: 12px;
        }
       
    }
    .list-item:nth-of-type(1) {
        margin-left: 66vw;
    }  
    .list-item:nth-of-type(4) {
        margin-right: calc(24px + (48 - 24) * ((100vw - 300px) / (2560 - 300)));
    }  
`;
export default Nav
