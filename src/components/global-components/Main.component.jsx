import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home.component';
import About from '../pages/About.component';
import Projects from '../pages/Projects.component';
import Contact from '../pages/Contact.component';



function Main(props) {
    const location = useLocation();
    return (
        <StyledMain className={props.navOpen ? 'active' : null}>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route path='/' exact>
                <Home page={props.page}  />
              </Route>
              <Route path='/about' exact>
                <About page={props.page}  />
              </Route>
              <Route path='/projects' exact>
                <Projects page={props.page}  />
              </Route>
              <Route path='/contact' exact>
                <Contact page={props.page}  />
              </Route>
            </Switch>
           
          </AnimatePresence>
         
      </StyledMain>
    )
}
const StyledMain = styled.main`
  position: absolute;
  right: 0;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111;
  z-index: 2;
  transition: right .5s;
  overflow: hidden;
  &.active {
    right: 300px;
  }
  @media only screen and (max-width: 1280px) {
    padding: 100px 0 0;
  }
`;

export default Main
