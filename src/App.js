import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Home from './components/Home.component';
import About from './components/About.component';
import Projects from './components/Projects.component';
import Contact from './components/Contact.component';
import Nav from './components/Nav.component';

function App() {
  const location = useLocation();
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
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
    </div>
  );
}

export default App;
