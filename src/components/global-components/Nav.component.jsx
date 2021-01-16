import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

//TODO make mobile nav close when link is clicked

const listVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const listItemVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'backIn',
      duration: 0.3,
    },
  },
  hover: {
    scale: 1.1,
  },
};

function Nav() {
  return (
    <StyledNav>
      <motion.ul
        className='nav-list'
        variants={listVariants}
        animate='visible'
        initial='hidden'
      >
        <motion.li className='list-item' variants={listItemVariants}>
          <Link className='link home-link' to='/'>
            Home
          </Link>
        </motion.li>
        <motion.li className='list-item' variants={listItemVariants}>
          <Link className='link about-link' to='/about'>
            About
          </Link>
        </motion.li>
        <motion.li className='list-item' variants={listItemVariants}>
          <Link className='link projects-link' to='/projects'>
            Projects
          </Link>
        </motion.li>
        <motion.li className='list-item' variants={listItemVariants}>
          <Link className='link contact-link' to='/contact'>
            Contact
          </Link>
        </motion.li>
      </motion.ul>
    </StyledNav>
  );
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
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      font-size: 1.3rem;
      color: ${(props) => props.theme.colors.tertiary};
      transition: all 0.5s;
    }
    .home-link:hover {
      color: #ffa3ba;
    }
    .about-link:hover {
      color: #40c2ff;
    }
    .projects-link:hover {
      color: #ff4b33;
    }
    .contact-link:hover {
      color: #435caf;
    }
  }
  @media screen and (max-width: 1279px) {
    background-color: ${(props) => props.theme.colors.primary};
    z-index: -1;
    transition: background-color 0.5s;
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
export default Nav;
