import React from 'react';
import styled from 'styled-components';
import Button from '../../global-components/Button.component';
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
    padding: 2rem 2rem 0;
    margin-top: 2.4rem;
    margin-bottom: 4rem;
    justify-content: center;
    align-items: center;
    & .card {
      flex: 1 1 45%;
      min-height: 45%;
      background-color: rgba(55, 55, 55, 0.4);
      backdrop-filter: blur(10px);
      border-radius: 15px;
      color: ${(props) => props.theme.colors.tertiary};
      overflow: hidden;
      position: relative;
      & .card-title {
        padding: 1rem 1rem 3rem;
        min-height: 120px;
        & i {
          color: ${(props) => props.theme.colors.primary};
          transition: color 1.2s;
          position: absolute;
          font-size: 35vw;
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
          font-size: calc(2rem + 3vw);
          padding: 2rem 0;
          line-height: 100%;
          font-weight: 700;
          text-align: center;
          position: relative;
          z-index: 1;
        }
      }
      & .card-paragraphs {
        min-height: 40rem;
        padding: 0 4rem 4rem;
        position: relative;
        z-index: 1;
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
        overflow: hidden;
        & .card-title {
          min-height: auto;
          & i {
            font-size: 50vw;
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
          padding:0 1rem 1rem;
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
            <p>
              A lot of my free time is spent taking additional online courses as
              well.
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
              I enjoy the most.
            </p>
            <p>
              However, I'm not afraid to dive into backend systems, especially
              when they enable amazing front-end designs
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
              Express, Redux, Bootstrap, and Styled-components
            </p>
            <p>
              I have some experience with other languages such as PHP, and Java,
              but they aren't my focus.
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
            <p>
              I have some experience with Animate and Dreamweaver as well, but
              their use is very niche.
            </p>
          </div>
        </div>
        <Button url='#' innerText='Resume' />
      </div>
    </ContentWrap>
  );
}

export default AboutContent;
