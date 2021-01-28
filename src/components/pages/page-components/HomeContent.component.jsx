import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContentWrap = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
  & .title {
    display: flex;
    flex-direction: column;
    align-items: center;

    * {
      font-family: 'Pacifico', cursive;
    }
    & h1 {
      font-size: 12rem;
      color: ${(props) => props.theme.colors.primary};
      padding: 0.5rem 0;
      text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.8);
      transition: color 2s;
    }
    & h2 {
      font-size: 8rem;
      color: ${(props) => props.theme.colors.tertiary};
      padding-bottom: 2rem;
      text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.8);
    }
  }
  & .ctaButtons {
    width: 100%;
    display: flex;
    align-items: center;
   
    & a {
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.tertiary};
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
      font-size: 5rem;
      transition: all 1s;
      text-transform: uppercase;
    }
    & .projectsButton {
      margin: 0 6rem 0 auto;
    }
    & .contactButton {
      margin: 0 auto 0 6rem;
    }
  }
  & .resumeButton {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.tertiary};
    padding: 0.3rem 0.4rem;
    border-radius: 2rem;
    margin: 4rem 0;
    width: 25%;
    text-align: center;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    font-size: 6rem;
    transition: all 1s;
    text-transform: uppercase;
  }
  @media screen and (max-width: 1280px) { 
    


    & .resumeButton {
    width: 40%;
  }
  }
`;

function HomeContent() {
  return (
    <ContentWrap className='contentWrap'>
      <div className='title'>
        <h1>Hey, I'm Silas</h1>
        <h2>I design & develop websites</h2>
      </div>
      <div className='ctaButtons'>
        <Link className='projectsButton' to='/projects'>
          My Projects
        </Link>
        <Link className='contactButton' to='/contact'>
          Contact Me
        </Link>
      </div>
       {/* !! TODO Update link */}
      <a className='resumeButton' href='https://www.linkedin.com/jobs'>
        My Resume
      </a>
    </ContentWrap>
  );
}

export default HomeContent;
