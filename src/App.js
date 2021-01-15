import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home.component';
import About from './components/About.component';
import Projects from './components/Projects.component';
import Contact from './components/Contact.component';
import Nav from './components/Nav.component';
import Background from './components/Background.component';
import logo from './assets/logo.svg';


function App() {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1279) {
        setNavOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <StyledApp>
      <Header>
        <div className='Logo'>
          <img src={logo} alt='Silvanus Designs' />
          <span className='logo-text-s'>S</span>
          <span className='logo-text'>
            ilvanus <br /> <span>Designs</span>
          </span>
        </div>
        <div
          className={`toggle ${navOpen ? 'active' : null}`}
          onClick={handleClick}
        ></div>
      </Header>
      <Main className={navOpen ? 'active' : null}>
        <Background />
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
          <Route path='/projects' exact>
            <Projects />
          </Route>
          <Route path='/contact' exact>
            <Contact />
          </Route>
        </Switch>
      </Main>
      <Nav />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  color: #fafafa;
  background-color: #ffa3ba;
`;

const Header = styled.header`
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

const Main = styled.main`
  position: absolute;
  right: 0;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111;
  transition: 0.5s;
  z-index: 2;
  &.active {
    right: 300px;
  }
`;

export default App;
