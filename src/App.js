import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Nav from './components/global-components/Nav.component';
import Main from './components/global-components/Main.component';
import Header from './components/global-components/Header.component';

function App() {
  const currentPage = useLocation();
  const [page, setPage] = useState(currentPage);
  const [navOpen, setNavOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(homeTheme);
  const handleClick = () => {
    setNavOpen(!navOpen);
  };
  useEffect(() => {
    const handlePageChange = () => {
      setPage(currentPage);
    };
    handlePageChange();
  }, [currentPage, page]);
  useEffect(() => {
    if (page.pathname === '/') {
      setCurrentTheme(homeTheme);
    } else if (page.pathname === '/about') {
      setCurrentTheme(aboutTheme);
    } else if (page.pathname === '/projects') {
      setCurrentTheme(projectsTheme);
    } else if (page.pathname === '/contact') {
      setCurrentTheme(contactTheme);
    }
  }, [page, currentTheme]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1279) {
        setNavOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <StyledApp>
        <Header navOpen={navOpen} onClick={handleClick} />
        <Main navOpen={navOpen} page={page} />
        <Nav />
      </StyledApp>
    </ThemeProvider>
  );
}

const StyledApp = styled.div`
  color: #ffa3ba;
  background-color: #ffa3ba;
`;
const homeTheme = {
  colors: {
    primary: '#ffa3ba',
    secondary: ' #FFD3DE',
    tertiary: '#FAFAFA',
    black: '#1A1A1A',
  },
};
const aboutTheme = {
  colors: {
    primary: '#40c2ff',
    secondary: ' #C5E2FC',
    tertiary: '#FAFAFA',
    black: '#1A1A1A',
  },
};
const projectsTheme = {
  colors: {
    primary: '#ff4b33',
    secondary: ' #d67264',
    tertiary: '#FAFAFA',
    black: '#1A1A1A',
  },
};
const contactTheme = {
  colors: {
    primary: '#435caf',
    secondary: ' #6ca7f5',
    tertiary: '#FAFAFA',
    black: '#1A1A1A',
  },
};

export default App;
