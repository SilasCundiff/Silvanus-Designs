import React from 'react';
import styled from 'styled-components';

const ContentWrap = styled.div`
  height: 100%;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
  padding: 0 0 0 2rem;
  .intro {
    font-family: 'Pacifico', cursive;
    font-size: calc(38px + (38 - 24) * ((100vw - 300px) / (1600 - 300)));
    color: ${(props) => props.theme.colors.tertiary};
    padding: 0 0 1rem 0;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
    transition: color 2s;
    width: 100%;
  }

  & div {
    width: 100%;
  }
  & div h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: calc(24px + (24 - 18) * ((100vw - 300px) / (1600 - 300)));
    color: ${(props) => props.theme.colors.tertiary};
    text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.8);
    line-height: 1;
    padding-bottom: 0.3rem;
  }
  & div p {
    font-family: 'Poppins', sans-serif;
    font-weight: light;
    font-size: calc(18px + (18 - 14) * ((100vw - 300px) / (1600 - 300)));
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.8);
    color: ${(props) => props.theme.colors.tertiary};
    padding-bottom: 1rem;
  }
  & .resumeButton {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.tertiary};
    padding: 0.3rem 0.2rem;
    border-radius: 2rem;
    margin: 0.5rem 0 0 4rem;
    width: 40%;
    text-align: center;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    font-size: 1.1rem;
    transition: all 1s;
    align-self: flex-start;
  }
`;

function AboutContent() {
  return (
    <ContentWrap className='contentWrap'>
      <h1 className='intro'>My name is Silas, and I'm</h1>
      <div className='education'>
        <h2>
          A graduate of <br /> Southern Crescent Technical College
        </h2>
        <p>With a double major in programming & Web Design/Development</p>
      </div>
      <div className='type'>
        <h2>
          Front-end Focused,
          <br /> Back-end Capable
        </h2>
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
      <a className='resumeButton' href='#'>
        My Resume
      </a>
    </ContentWrap>
  );
}

export default AboutContent;
