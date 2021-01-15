import React from 'react'
import logo from '../assets/logo.svg';
import styled from 'styled-components'
function Header(props) {
    function handleClick(event) {
        props.onClick(event.target.value)
    }
    
    return (
        <StyledHeader>
        <div className='Logo'>
          <img src={logo} alt='Silvanus Designs' />
          <span className='logo-text-s'>S</span>
          <span className='logo-text'>
            ilvanus <br /> <span>Designs</span>
          </span>
        </div>
        <div
          className={`toggle ${props.navOpen ? 'active' : null}`}
          onClick={handleClick}
        ></div>
      </StyledHeader>
    )
}
const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  display: flex;
  align-items: center;
  z-index: 1000;
  & .Logo {
    display: flex;
    align-items: center;
    color: #fafafa;

    & .logo-text,
    & .logo-text span {
      font-size: 1.8rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 0.8;
    }
    & .logo-text span {
      color: #ffa3ba;
    }
    .logo-text-s {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 4rem;
      line-height: 0.2;
    }
  }

  & img {
    max-width: 128px;
    min-width: 64px;
    width: 10vw;
  }
  .toggle {
    position: relative;
    width: 60px;
    height: 60px;
    background: url(https://i.ibb.co/HrfVRcx/menu.png);
    background-repeat: no-repeat;
    background-size: 30px;
    background-position: center;
    cursor: pointer;
    margin-left: auto;
    display: none;
  }
  .toggle.active {
    background: url(https://i.ibb.co/rt3HybH/close.png);
    background-repeat: no-repeat;
    background-size: 25px;
    background-position: center;
    cursor: pointer;
  }
  @media screen and (max-width: 1279px) {
    .toggle {
      display: block;
    }
  }
  @media screen and (max-width: 798px) {
    padding: 40px;
  }
`;
export default Header
