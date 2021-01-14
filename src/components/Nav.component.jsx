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
    position: absolute;
    z-index: -1;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: inherit;
    * {
        background-color: transparent;
    }
    .nav-list {
        color: black;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;
        list-style: none;
        height: 100%;
        width: 300px;
        margin-right: 50px;
        gap: 20px 0;
       
    }
    .list-item {

        .link {
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            text-transform: uppercase;
            font-size: 1.3rem;
            color: white;
        }
       
    }

    @media screen and (max-width: 798px) {
    .list-item {
        .link {
            font-size: 1.8rem;
        }
    }
  }
`;
export default Nav
