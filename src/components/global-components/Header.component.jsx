import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Logo from './Logo.component';
import { Link } from 'react-router-dom';
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
      <Link to='/'>
        <div className='logo-container'>
          <motion.div
            variants={logoVariants}
            initial='hidden'
            animate='visible'
          >
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
              className={`logo-text-sub ${props.navOpen ? 'open' : 'closed'}`}
              variants={textLogoSubVariants}
              initial='hidden'
              animate='visible'
            >
              Designs
            </motion.span>
          </div>
        </div>
      </Link>
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
  min-height: 15vh;
  width: fit-content;
  padding-left: 2rem;
  padding-top: 2.6rem;
  z-index: 3;
  /* background-color: blue; */
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
      font-size: 4.6rem;
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
      font-weight: 700;
      text-transform: uppercase;
      font-size: 10rem;
      line-height: 0.5;
      color: ${(props) => props.theme.colors.tertiary};
    }
  }

  .toggle {
    position: absolute;
    top: 15%;
    right: 5%;
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
    padding-left: 0.5rem;
    pointer-events: all;
    & .logo-container {
      & .logo-text-main,
      & .logo-text-sub {
        font-size: 5rem;
      }
      .logo-text-s {
        font-size: 11rem;
      }
    }
    & .logo-text-sub {
      transition: color 0.5s;
    }
    & .open {
      color: ${(props) => props.theme.colors.tertiary} !important;
    }
    & .closed {
      color: ${(props) => props.theme.colors.primary} !important;
    }
    .toggle {
      top: 0;
      right: 2%;
      position: fixed;
      display: block;
    }
  }

  @media screen and (max-width: 414px) {
    padding-top: 1rem;
    & .logo-container {
      & .logo-text-main,
      & .logo-text-sub {
        font-size: 3.2rem;
      }
      .logo-text-s {
        font-size: 7rem;
      }
    }
  }
`;

const StyledLogo = styled(Logo)`
  color: inherit;
  max-width: 128px;
  min-width: 64px;
  width: 10rem;
  margin: 0 -1rem 0 0;
  @media screen and (max-width: 768px) {
    margin: 0 -0.5rem 0 0;
    width: 9rem;
  }
  @media screen and (max-width: 375px) {
    width: 8rem;
  }
`;
export default Header;
