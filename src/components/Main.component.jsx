import React from 'react';
import styled from 'styled-components';
import { Switch, Route, useLocation } from 'react-router-dom';
import Background from './Background.component';
import Home from './Home.component';
import About from './About.component';
import Projects from './Projects.component';
import Contact from './Contact.component';
function Main(props) {
    const location = useLocation();
    return (
        <StyledMain className={props.navOpen ? 'active' : null}>
        <Background page={props.page} />
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
  transition: 0.5s;
  z-index: 2;
  &.active {
    right: 300px;
  }
`;
export default Main
