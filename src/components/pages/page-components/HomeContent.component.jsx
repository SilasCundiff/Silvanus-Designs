import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContentWrap = styled.div`
  & .title {
    display: flex;
    flex-direction: column;
    align-items: center;

    * {
      font-family: 'Pacifico', cursive;
    }
    & h1 {
      font-size: 3.6rem;
      color: ${(props) => props.theme.colors.primary};
      padding: 0.5rem 0;
      text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.8);
      transition: color 2s;
    }
    & h2 {
      font-size: 1.8rem;
      color: ${(props) => props.theme.colors.tertiary};
      padding-bottom: 2rem;
      text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.8);
    }
  }
  & .ctaButtons {
    width: 100%;
    display: flex;
    /* justify-content: space-evenly; */
    align-items: center;
    & a {
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.tertiary};
      padding: 0.3rem 0.6rem;
      border-radius: 2rem;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
      font-size: 1.2rem;
      transition: all 1s;
    }
    & .projectsButton {
      margin: 0 0.8rem 0 auto;
    }
    & .contactButton {
      margin: 0 auto 0 0.8rem;
    }
  }
  & .resumeButton {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.tertiary};
    padding: 0.3rem 0.6rem;
    border-radius: 2rem;
    margin: 2rem 0;
    width: 60%;
    text-align: center;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    font-size: 1.2rem;
    transition: all 1s;
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
      <a className='resumeButton' href='#'>
        My Resume
      </a>
    </ContentWrap>
  );
}

export default HomeContent;
