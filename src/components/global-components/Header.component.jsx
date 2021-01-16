import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Logo from './Logo.component';

const logoVariants = {
  hidden: {
    opacity: 0,
    scale: 0.2,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 8,
      ease: 'easeOut',
      duration: 1.5,
    },
  },
};
const textLogoSVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'backOut',
      duration: 0.5,
    },
  },
};
const textLogoNameVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: 'backOut',
      duration: 0.75,
      delay: 0.3,
    },
  },
};
const textLogoSubVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: 'backOut',
      duration: 0.75,
      delay: 0.3,
    },
  },
};

function Header(props) {
  function handleClick(event) {
    props.onClick(event.target.value);
  }

  return (
    <StyledHeader>
      <div className='logo-container'>
        <motion.div variants={logoVariants} initial='hidden' animate='visible'>
          <StyledLogo />
        </motion.div>
        <motion.span
          className='logo-text-s'
          variants={textLogoSVariants}
          initial='hidden'
          animate='visible'
        >
          S
        </motion.span>
        <div className='logo-text-container'>
          <motion.span
            className='logo-text-main'
            variants={textLogoNameVariants}
            initial='hidden'
            animate='visible'
          >
            ilvanus
          </motion.span>
          <motion.span
            className='logo-text-sub'
            variants={textLogoSubVariants}
            initial='hidden'
            animate='visible'
          >
            Designs
          </motion.span>
        </div>
      </div>
      <div
        className={`toggle ${props.navOpen ? 'active' : null}`}
        onClick={handleClick}
      ></div>
    </StyledHeader>
  );
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
    color: ${(props) => props.theme.colors.primary};
    transition: color 1.5s;
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
      color: ${(props) => props.theme.colors.tertiary};
    }
    & .logo-text-sub {
      color: inherit;
    }
    .logo-text-s {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 4rem;
      line-height: 0.5;
      color: ${(props) => props.theme.colors.tertiary};
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
    transition: all 0.1s;
  }
  .toggle.active {
    background: url(https://i.ibb.co/rt3HybH/close.png);
    background-repeat: no-repeat;
    background-size: 25px;
    background-position: center;
    cursor: pointer;
    transition: all 0.1s;
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
  color: inherit;
  max-width: 128px;
  min-width: 64px;
  width: 10vw;
  margin: 0;
`;
export default Header;
