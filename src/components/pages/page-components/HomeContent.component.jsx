import React from 'react';
import styled from 'styled-components';
import Button from '../../global-components/Button.component';

const ContentWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .title {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    & .titleText {
      text-align: center;
      & h1,
      h2 {
        font-family: 'Pacifico', cursive;
      }
      & h1 {
        font-size: calc(2rem + 5vw);
        color: ${(props) => props.theme.colors.tertiary};
        padding: 0.5rem 0;
        text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.8);
        transition: color 2s;
      }
      & h2 {
        font-size: calc(1rem + 3vw);
        color: ${(props) => props.theme.colors.primary};
        transition: color 2s;
        padding-bottom: 2rem;
        text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.8);
      }
    }
  }
  .buttonContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    
  }

  @media screen and (max-width: 1024px) {
    & .title {
      & .titleText {
        & h1 {
          font-size: calc(2rem + 10vw);
        }
        & h2 {
          font-size: calc(2rem + 4vw);
        }
      }
    }
  }
`;

function HomeContent() {
  return (
    <ContentWrap className='contentWrap'>
      <div className='title'>
        <div className='titleText'>
          <h1>Hey, I'm Silas</h1>
          <h2>I love making websites come to life</h2>
        </div>
        <div className='buttonContainer'>
          <Button to='projects' innerText='Projects' />
          <Button to='contact' innerText='Contact' />
          <Button url='#' innerText='Resume' />
        </div>
      </div>
      {/* <div className='ctaButtons'>
        <Link className='projectsButton' to='/projects'>
          My Projects
        </Link>
        <Link className='contactButton' to='/contact'>
          Contact Me
        </Link>
      </div>

      <a className='resumeButton' href='https://www.linkedin.com/jobs'>
        My Resume
      </a> */}
    </ContentWrap>
  );
}

export default HomeContent;
