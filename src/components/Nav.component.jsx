import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
//TODO make mobile nav close when link is clicked
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
    z-index: 1000;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: transparent;
    * {
        background-color: transparent;
    }
    .nav-list {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        list-style: none;
        margin-right: 50px;
        margin-top: 20px;
        gap: 0 50px;
    }
    .list-item {
        .link {
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            text-transform: uppercase;
            font-size: 1.3rem;
            color: ${props => props.theme.colors.tertiary};
        }
       
    }
    @media screen and (max-width: 1279px) {
        background-color: ${props => props.theme.colors.primary};
        transition: background-color .5s;
        z-index: -1;
        .nav-list {
            justify-content: center;
            align-items: flex-end;
            flex-direction: column;
            height: 100%;
            width: 300px;
            gap: 20px 0;
        }
        .list-item {
            .link {
                font-size: 1.8rem;
            }
        }
}
   

`;
export default Nav
