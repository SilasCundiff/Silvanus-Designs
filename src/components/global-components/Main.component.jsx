import React from 'react';
import styled from 'styled-components';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home.component';
import About from '../pages/About.component';
import Projects from '../pages/Projects.component';
import Contact from '../pages/Contact.component';


function Main(props) {
    const location = useLocation();
    return (
        <StyledMain className={props.navOpen ? 'active' : null}>
        
          <Switch location={location} key={location.pathname}>
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
