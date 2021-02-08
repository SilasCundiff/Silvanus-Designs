import React from 'react';
import styled from 'styled-components';

const ContentWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding-top: 2rem;
  .card-container {
    height: auto;
    width: 90%;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem 4rem;
    padding: 2rem 2rem 6rem;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;

    & .card {
      flex: 1 1 45%;
      min-height: 45%;
      background-color: rgba(55, 55, 55, 0.4);
      backdrop-filter: blur(10px);
      border-radius: 5px;
      color: ${(props) => props.theme.colors.tertiary};
      & i {
        color: ${(props) => props.theme.colors.primary};
        position: absolute;
        font-size: calc(12rem + 15vw);

        top: 0;
        left: 0;
        margin: 3rem;
        z-index: -1;
        filter: opacity(30%);
      }
      & .card-title {
        padding: 2rem;
        min-height: 120px;
        & h2 {
          font-size: calc(2rem + 2vw);

          line-height: 90%;
          font-weight: 900;
        }
      }
      & .card-paragraphs {
        /* background-color: green; */
        min-height: 40rem;
        padding: 0 2rem 4rem;
        & p {
          font-size: calc(1.6rem + 1vw);
          width: auto;
          padding-top: 2rem;
        }
      }
    }
  }
  @media screen and (max-width: 1279px) {
    .card-container {
      width: 100%;
      & .card {
        flex: 1 1 100%;
        & .card-title {
          min-height: auto;
          & h2 {
            font-size: calc(4rem + 2vw);

            line-height: 90%;
            font-weight: 900;
          }
        }
        & .card-paragraphs {
          /* background-color: green; */
          min-height: auto;
          & p {
            font-size: calc(2.4rem + 1vw);
            width: auto;
            padding-top: 2rem;
          }
        }
      }
    }
  }
`;

function AboutContent() {
  return (
    <ContentWrap className='contentWrap'>
      {/* <h1 className='intro'>My name is Silas, and I'm</h1>
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
      <a className='resumeButton' href='https://www.linkedin.com/jobs'>
        My Resume
      </a> */}
      <div className='card-container'>
        <div className='card education'>
          <i className='fas fa-graduation-cap'></i>
          <div className='card-title'>
            <h2>Where I Learn &amp; Grow</h2>
          </div>
          <div className='card-paragraphs'>
            <p>
              I graduated from Southern Crescent Technical College with a
              dual-diploma in Programming and Web Design & Development.
            </p>
            <p>
              A lot of my free time is spent taking additional online courses as
              well.
            </p>
          </div>
        </div>
        <div className='card focus'>
          <i className='fas fa-crosshairs'></i>
          <div className='card-title'>
            <h2>Full-Stack Creativity</h2>
          </div>
          <div className='card-paragraphs'>
            <p>
              My main focus has always been front-end design because that's what
              I enjoy the most.
            </p>
            <p>
              However, I'm not afraid to dive into backend systems, especially
              when they enable amazing front-end designs
            </p>
          </div>
        </div>
        <div className='card coding'>
          <i className='fas fa-code'></i>
          <div className='card-title'>
            <h2>Main Coding Languages</h2>
          </div>
          <div className='card-paragraphs'>
            <p>
              HTML, CSS, and JS are my most used, with React being my favorite
              library. I've gained experience with Git, Node, SQL, Sass,
              Express, Redux, Bootstrap, and Styled-components
            </p>
            <p>
              I have some experience with other languages such as PHP, and Java,
              but they aren't my focus.
            </p>
          </div>
        </div>
        <div className='card design'>
          <i className='fas fa-pencil-ruler'></i>
          <div className='card-title'>
            <h2>Design Tools I Love</h2>
          </div>
          <div className='card-paragraphs'>
            <p>
              Adobe is what I use when I need to plan designs, create assets, or
              make edits to existing assets. With Photoshop, Illustrator, and XD
              being some of my most used tools.
            </p>
            <p>
              I have some experience with Animate and Dreamweaver as well, but
              their use is very niche.
            </p>
          </div>
        </div>
      </div>
    </ContentWrap>
  );
}

export default AboutContent;
