import React from 'react';
import styled from 'styled-components';
const ContentWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  .card-container {
    width: 80%;
    height: 80%;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    gap: 4rem 2rem;
    justify-content: center;
    align-items: flex-start;
    & .card {
      flex: 1 1 45%;
      color: ${(props) => props.theme.colors.tertiary};
      overflow: hidden;
      position: relative;
      display: flex;
      flex-direction: column;

      & .card-title {
        padding: 1rem;
        width: 100%;
        & i {
          color: ${(props) => props.theme.colors.primary};
          transition: color 1.2s;
          position: absolute;
          /* font-size: 20vw; */
          top: -25%;
          left: -15%;
          margin: 2rem 0;
          z-index: -1;
          opacity: 60%;
        }
        /* & .fa-graduation-cap {
          font-size: calc(2rem + 8vw);
        } */
        & h2 {
          font-family: 'Pacifico', cursive;
          font-size: calc(0.8rem + 1.2vw);
          padding: 1rem 0;
          line-height: 100%;
          font-weight: 700;
          text-align: left;
          position: relative;
          z-index: 1;
        }
      }
      & .card-paragraphs {
        padding: 0 2rem;
        margin-bottom: auto;
        margin-top: 1rem;
        position: relative;
        z-index: 1;
        font-weight: lighter;
        & p {
          font-size: calc(0.8rem + 0.7vw);
        }
      }
    }
    & .aboutButton {
      font-size: 2.6rem;
      flex-grow: 0;
      padding: 1rem 1rem;
    }
  }

  @media screen and (max-width: 1279px) {
    .card-container {
      width: 100%;
      margin: 4rem 0;
      height: 90%;
      & .card {
        flex: 1 1 100%;
        overflow: hidden;
        padding: 2rem;
        & .card-title {
          min-height: auto;
          & i {
            font-size: 50vw;
            display: none;
            top: -10%;
            left: -10%;
          }
          & .fa-graduation-cap {
            font-size: 50vw;
          }
          & h2 {
            font-size: calc(4rem + 2vw);
            line-height: 90%;
            font-weight: 900;
          }
        }
        & .card-paragraphs {
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
  & .aboutButton {
    font-size: 2.6rem;
    flex-grow: 0;
  }
  @media screen and (max-width: 576px) {
    & .card-container {
      & .card {
        & .card-title {
          padding: 1rem 0;
          & i {
            font-size: 70vw;
            top: -10%;
            left: -10%;
          }
          & .fa-graduation-cap {
            font-size: 75vw;
            top: -15%;
          }
          & h2 {
            font-size: calc(2rem + 4vw);
            padding-bottom: 0;
          }
        }
        & .card-paragraphs {
          padding: 0 1rem 1rem;
          margin: 0;
          & p {
            font-size: calc(1rem + 2.4vw);
          }
        }
      }
    }
  }
`;

function AboutContent() {
  return (
    <ContentWrap className='contentWrap'>
      <div className='card-container'>
        <div className='card education'>
          <div className='card-title'>
            <i className='fas fa-graduation-cap'></i>
            <h2>Southern Crescent Technical College</h2>
          </div>
          <div className='card-paragraphs'>
            <p>
              I graduated from Southern Crescent Technical College with a
              dual-diploma in Programming and Web Design & Development.
            </p>
          </div>
        </div>
        <div className='card focus'>
          <div className='card-title'>
            <i className='fas fa-crosshairs'></i>
            <h2>Front-end Focused, Back-end Capable</h2>
          </div>
          <div className='card-paragraphs'>
            <p>
              My main focus has always been front-end design because that's what
              I enjoy the most. However, I'm not afraid to dive into backend
              systems, especially when they enable amazing front-end designs.
            </p>
          </div>
        </div>
        <div className='card coding'>
          <div className='card-title'>
            <i className='fas fa-code'></i>
            <h2>What I code in</h2>
          </div>
          <div className='card-paragraphs'>
            <p>
              HTML, CSS, and JS are my most used, with React being my favorite
              library. I've gained experience with Git, Node, SQL, Sass,
              Express, Redux, Bootstrap, and Styled-components.
            </p>
          </div>
        </div>
        <div className='card design'>
          <div className='card-title'>
            <i className='fas fa-pen-fancy'></i>
            <h2>Design Tools I Love</h2>
          </div>
          <div className='card-paragraphs'>
            <p>
              Adobe is what I use when I need to plan designs, create assets, or
              make edits to existing assets. With Photoshop, Illustrator, and XD
              being some of my most used tools.
            </p>
          </div>
        </div>
      </div>
    </ContentWrap>
  );
}

export default AboutContent;
