import React from 'react';
import styled from 'styled-components';

const ContentWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  .intro {
    font-family: 'Pacifico', cursive;
    font-size: 8rem;
    color: ${(props) => props.theme.colors.tertiary};
    padding: 0 0 1rem 0;
    text-shadow: 2px 2px 1px ${(props) => props.theme.colors.primary};
    transition: color 2s;
    width: 100%;
  }

  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    & * {
      font-family: 'Poppins', sans-serif;
    }
  }
  & div h2 {
    font-weight: bold;
    font-size: 6rem;
    color: ${(props) => props.theme.colors.tertiary};
    text-shadow: 2px 2px 1px ${(props) => props.theme.colors.primary};
    line-height: 0.9;
  }
  & div p {
    font-weight: light;
    font-size: 3rem;
    text-shadow: 2px 2px 1px ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.tertiary};
    padding-bottom: 1.8rem;
  }
  & .resumeButton {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.tertiary};
    padding: 0.2rem 0.4rem;
    border-radius: 2rem;
    margin: auto;
    width: 25%;
    text-align: center;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    font-size: 3.8rem;
    transition: all 1s;
    text-transform: uppercase;
  }
  @media screen and (max-width: 1680px) {
    width: 100vw;
    background: rgba(0, 0, 0, 0.2);
    margin-top: auto;
    padding: 0;

    .intro {
      margin-top: auto;
      width: 100%;
      text-align: center;
    }

    & div {
      width: 80%;
      padding: 0 auto;
    }
    & .resumeButton {
      width: 40%;
      align-self: unset;
      margin: 20px auto;
    }
  }
  @media screen and (max-width: 768px) {
    height: 89%;
    align-items: flex-end;
    padding: 1rem;
    overflow-y: scroll;
    .intro {
      font-size: 10rem;
      margin-bottom: 2rem;
      line-height: 12rem;
    }
    & div {
      width: 100%;
    }
    & div h2 {
      font-size: 6rem;
      line-height: 0.9;
      padding-bottom: 1rem;
    }
    & div p {
      font-size: 3.8rem;
      line-height: 1.2;
      padding-bottom: 3rem;
    }
    & .resumeButton {
      width: 80%;
      margin: 0 auto 4rem;
    }
  }
  @media screen and (max-width: 375px) {
    height: 85%;
    align-items: flex-end;
    padding: 1rem;
    overflow-y: scroll;
    .intro {
      font-size: 6rem;
      margin-bottom: 2rem;
      line-height: 8rem;
    }
    & div {
      width: 100%;
    }
    & div h2 {
      font-size: 3.6rem;
      line-height: 0.9;
      padding-bottom: 1rem;
    }
    & div p {
      font-size: 3rem;
      line-height: 1.2;
      padding-bottom: 3rem;
    }
    & .resumeButton {
      width: 80%;
    }
  }
`;

function AboutContent() {
  return (
    <ContentWrap className='contentWrap'>
      <h1 className='intro'>My name is Silas, and I'm</h1>
      <div className='education'>
        <h2>A graduate of Southern Crescent Technical College</h2>
        <p>With a double major in programming & Web Design/Development</p>
      </div>
      <div className='type'>
        <h2>Front-end Focused, Back-end Capable</h2>
        <p>with a love of projects that allow for creativity</p>
      </div>
      <div className='codeExperience'>
        <h2>Most experienced in HTML, CSS, & JS</h2>
        <p>with experience in Sass, Express, Redux, and React</p>
      </div>
      <div className='designExperience'>
        <h2>An Abode suite Designer</h2>
        <p>that loves Photoshop, Illustrator, XD, Animate</p>
      </div>
      {/* !! TODO Update link */}
      <a className='resumeButton' href='https://www.linkedin.com/jobs'>
        My Resume
      </a>
    </ContentWrap>
  );
}

export default AboutContent;
