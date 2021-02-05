import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContentWrap = styled.div`
  height: 100%;
  width: auto;
  margin: 0 auto;
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
    width: auto;
    display: flex;
    align-items: center;

    & a {
      cursor: pointer;
      background-color: rgba(20,20,20,.2);
      backdrop-filter: blur(10px);
      color: ${(props) => props.theme.colors.tertiary};
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
      font-size: 4.2rem;
      transition: all 1s;
      text-transform: uppercase;
      width: auto;
      backdrop-filter: blur(10px);
      font-weight: 700;
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
    background-color: rgba(20,20,20,.2);
    backdrop-filter: blur(10px);
    color: ${(props) => props.theme.colors.tertiary};
    padding: 0.3rem 2rem;
    border-radius: 2rem;
    margin: 4rem 0;
    width: auto;
    text-align: center;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    font-size: 4.2rem;
    transition: all 1s;
    text-transform: uppercase;
    font-weight: 700;
  }
  @media screen and (max-width: 1279px) {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & .title {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      text-align: center;
      padding-top: 0;
      & h1 {
        font-size:10rem;
        padding: 0 2rem;
        margin: 0 auto;
      }
      & h2 {
        font-size: 7.4rem;
        padding: 2rem 8rem;
        margin: 2rem 1rem;
        line-height: 10rem;
      }
    }
    & .ctaButtons {

      display: flex;
      align-items: center;
      margin: 0 auto;
      & a {
        padding: 0.3rem 2rem;
        font-size: 4rem;
      }
      & .projectsButton,
      .contactButton {
        margin: 1rem auto;
      }
    }
    & .resumeButton {
      padding: 0.3rem 2rem;
      margin: 3rem auto 0;
      font-size: 4.2rem;
    }
  } /* end of 768px */
  @media screen and (max-width: 768px) {
    & .title {
      & h2 {
        font-size: 8rem;
      }
    }
    & .resumeButton {
      width: 70%;
      font-size: 4.8rem;
    }
  } /* end of 768px */
  @media screen and (max-width: 375px) {
    & .title {
      padding-top: 4rem;
      & h1 {
        font-size: 4.8rem;
      }
      & h2 {
        font-size: 3.8rem;
        padding: 0 4rem;
        line-height: 4.6rem;
      }
    }
    & .ctaButtons {
      display: flex;
      align-items: center;
      flex-direction: column;
      & a {
        font-size: 3rem;
      }
    }
    & .resumeButton {
      width: 70%;
      font-size: 2.8rem;
    }
  } /* end of 375px */
`;

function HomeContent() {
  return (
    <ContentWrap className='contentWrap'>
      <div className='title'>
        <h1>Hey, I'm Silas</h1>
        <h2>making beautiful websites is my passion</h2>
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
