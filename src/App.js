import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import Nav from './components/Nav.component';
import Main from './components/Main.component';
import Header from './components/Header.component';

function App() {
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
      <Header navOpen={navOpen} onClick={handleClick} />
      <Main navOpen={navOpen} />
      <Nav />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  color: #ffa3ba;
  background-color: #ffa3ba;
`;

export default App;
