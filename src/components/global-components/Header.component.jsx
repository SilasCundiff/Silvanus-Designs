import React from 'react';
import styled from 'styled-components';
import Logo from './Logo.component'

function Header(props) {
    function handleClick(event) {
        props.onClick(event.target.value)
    }
    
    return (
        <StyledHeader>
        <div className='logo-container'>
          <StyledLogo />
          <span className='logo-text-s'>S</span>
          <div className='logo-text-container'>
            <span className='logo-text-main'>
              ilvanus
            </span>
            <span className='logo-text-sub'>Designs</span>
          </div>
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
  & .logo-container {
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.primary};
    transition: color .5s;
    & .logo-text-container {
      display: flex;
      flex-direction: column;
    }
    & .logo-text-main,
    & .logo-text-sub {
      font-size: 1.8rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 0.8;
    }
    & .logo-text-main {
      color: ${props => props.theme.colors.tertiary};
    }
    & .logo-text-sub {
      transition: color .5s;
      color: inherit;
    }
    .logo-text-s {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 4rem;
      line-height: 0.5;
      color: ${props => props.theme.colors.tertiary};
    }
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

const StyledLogo = styled(Logo)`
    transition: color .5s;
    color: inherit;
    max-width: 128px;
    min-width: 64px;
    width: 10vw;
    margin: 0;
`;
export default Header
