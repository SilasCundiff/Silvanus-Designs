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
        /* padding: 0; */
        text-shadow: 5px 5px 8px rgba(0, 0, 0, 0.6);
        transition: color 2s;
      }
      & .subtext {
        font-size: calc(1rem + 3vw);
        color: ${(props) => props.theme.colors.primary};
        transition: color 2s;
        padding-bottom: 2rem;
      }
    }
  }
  .buttonContainer {
    margin-top: 4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    flex-direction: column;
    * {
      font-size: 2rem;
    }
    @media screen and (min-width: 1024px) {
      margin-top: 4rem;
      width: 50%;
      flex-direction: row;
      * {
        font-size: 3rem;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    & .title {
      & .titleText {
        & h1 {
          font-size: calc(2rem + 9vw);
          margin-bottom: 2rem;
        }
        & .subtext {
          font-size: calc(2rem + 4vw);
          text-align: center;
        }
      }
    }
  }
  @media screen and (max-width: 360px) {
    & .buttonContainer {
      & .homeButton {
        font-size: 1.6rem;
      }
    }
  }
`;
const buttonStyle = {
  backgroundColor: '#eb6385',
};
function HomeContent() {
  return (
    <ContentWrap className='contentWrap'>
      <div className='title'>
        <div className='titleText'>
          <h1>Hey, I'm Silas</h1>
          <span className='subtext'>Welcome to my neck of the woods</span>
        </div>
        <div className='buttonContainer'>
          <Button
            to='contact'
            innerText="Let's Chat"
            customStyle={buttonStyle}
            customClass='homeButton'
          />
          <Button to='projects' innerText='My Work' customClass='homeButton' />

          {/* <Button url='#' innerText='Resume' /> */}
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
