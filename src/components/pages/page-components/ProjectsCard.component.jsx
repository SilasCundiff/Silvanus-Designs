import React, { useState } from 'react';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';

function ProjectsCard({ title, subtitle, imgSrc, icons }) {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card>
      <div className={`cardWrapper ${expanded ? 'expanded' : 'compact'}`}>
        <Tilt
          //   tiltEnable={expanded ? false : true}
          className='tilt'
          perspective={1000}
          tiltMaxAngleX={expanded ? 0 : 20}
          tiltMaxAngleY={expanded ? 0 : 20}
          transitionSpeed={1000}
        >
          <div className='card'>
            <div className='imgWrapper'>
              <div className='imgOverlay'></div>
              <iframe
                className='demoVideo'
                title='test'
                width='560'
                height='315'
                src='https://www.youtube.com/embed/VoUHpIFCetk'
                frameborder='0'
                allow='clipboard-write; encrypted-media; picture-in-picture'
                allowfullscreen
              ></iframe>
              <img src={imgSrc} alt='' className='cardImage' />

              <img src={imgSrc} alt='' className='cardImage' />
              <img src={imgSrc} alt='' className='cardImage' />
              <img src={imgSrc} alt='' className='cardImage' />
            </div>
            <div className='cardText'>
              <h2 className='cardTitle'>{title}</h2>
              <p className='cardSubTitle'>{subtitle}</p>
              <div className='expandedCardText'>
                <div className='col-1'>
                  <div className='description'>
                    <h3>The Rundown</h3>
                    <p>
                      Zenify is an app I created that makes use of Spotify's web
                      playback and audio analysis to power a particle based
                      audio visualizer. Many of the hardest problems that arose
                      during development did not have solutions or information
                      online.
                    </p>
                    <p>
                      For more detailed information, feel free to drop by my
                      GitHub.
                    </p>
                  </div>
                </div>
                <div className='col-2'>
                  <div className='challenges'>
                    <h3>The Hardest Problem</h3>
                    <p>
                      The Spotify's Web Api information is very detailed, but it
                      is all in JSON format. I needed a way to compare the
                      listener's current position in the song to the analysis
                      data for the current segment in the song.
                    </p>
                  </div>
                  <div className='solution'>
                    <h3>My Solution</h3>
                    <p>
                      I designed a system that uses real time to create
                      timestamps that can be used to track playback progress.
                      Then I use the timestamp to retrieve the current segment
                      in the song. Then I make use of the segment's data to
                      manipulate the particles based on the musical properties
                      of the segment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='cardSkillBar'>
              {icons.html ? <i className='fab fa-html5'></i> : null}
              {icons.css ? <i className='fab fa-css3-alt'></i> : null}
              {icons.js ? <i className='fab fa-js-square'></i> : null}
              {icons.react ? <i className='fab fa-react'></i> : null}
              {icons.bootstrap ? <i className='fab fa-bootstrap'></i> : null}
              {icons.sass ? <i className='fab fa-sass'></i> : null}
            </div>
            <button onClick={handleClick} className='expandButton'>
              <i className='fas fa-expand'></i>
            </button>
            {/* <button
                onClick={handleClick}
                className={`closeButton ${expanded ? null : 'hidden'}`}
              >
                <i className='fas fa-times'></i>
              </button> */}
          </div>
        </Tilt>
      </div>
    </Card>
  );
}
const Card = styled.div`
  .cardWrapper {
    background: none;
    transform: translate3d(0, 0, 0);
    transition: all 5s;
    transform-origin: initial;

    .tilt {
      transform-style: preserve-3d;
    }
    & .card {
      height: 300px;
      width: 450px;
      display: flex;
      position: relative;
      transition: all 1s;
      & .cardText {
        position: absolute;
        color: ${(props) => props.theme.colors.tertiary};
        top: -15%;
        right: -15%;
        z-index: 2;
        transform-style: preserve-3d;
        & .cardTitle,
        & .cardSubTitle {
          font-family: 'Poppins', sans-serif;
          transform-style: preserve-3d;
          transform: translate3d(0, 0, 15px);
          transition: 0.5s;
        }
        & .cardTitle {
          font-size: 72px;
          line-height: 2rem;
        }
        & .cardSubtitle {
          margin-top: 15px;
          width: 200px;
          font-size: 24px;
          line-height: 0.8rem;
        }
      }

      & .imgOverlay {
        width: 450px;
        height: 300px;
        background-color: rgba(0, 0, 0, 0.2);
        position: absolute;
        z-index: 0;
        border-radius: 10px;
      }
      & img {
        width: 100%;
        margin: auto;
        height: 300px;
        object-fit: cover;
        border-radius: 10px;
      }
      & .cardSkillBar,
      & .expandButton {
        opacity: 0;
        visibility: none;
        position: absolute;
        transition: opacity 0.5s;
        transform-style: preserve-3d;
        transform: translate3d(0, 0, 15px);
      }
      & .cardSkillBar {
        bottom: -16px;
        left: 6px;
        color: ${(props) => props.theme.colors.tertiary};
        & i {
          padding: 5px 10px;
        }
      }
      & .expandButton {
        color: ${(props) => props.theme.colors.tertiary};
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding: 10px;
        top: 50%;
        left: 50%;
        transform-style: preserve-3d;
        transform: translate3d(-50%, -50%, 15px);
        & i {
          font-size: 1.6rem;
        }
      }
    }
    & .card::after {
      content: 'See more';
      color: ${(props) => props.theme.colors.tertiary};
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate3d(-50%, -50%, 15px);
      transform-style: preserve-3d;
      font-size: 0.8rem;
      opacity: 0;
      transition: opacity 0.5s;
    }
    & .card:hover {
      & .cardSkillBar,
      & .expandButton {
        opacity: 1;
        visibility: visible;
      }
      &:hover::after {
        opacity: 1;
      }
    }
  }
  .expanded {
    transform: translate3d(-25%, 0, 30px);
    transition: translate 1s;
    background-color: rgba(240, 240, 240, 0.5);
    border-radius: 15px;
    backdrop-filter: blur(5px);
    transform-origin: initial;
    & .card {
      height: 73vh;
      width: 80vw;
      justify-content: space-between;
      & .cardText {
        position: relative;
        top: 0;
        right: 0;
        height: fit-content;
        height: 100%;
        width: 75%;
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        & .cardTitle,
        & .cardSubTitle {
          transform: translate3d(0, 0, 0);
        }
        & .cardTitle {
          font-size: 100px;
          line-height: 3.5rem;
          margin: -60px auto 0;
          padding: 0 40px 40px;
          height: fit-content;
        }
        & .cardSubTitle {
          margin: -60px auto 0;
          font-size: 40px;
          padding-top: 20px;
          line-height: initial;
          text-align: left;
          flex: 1 1 20%;
        }

        & .expandedCardText {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          height: 80%;
          /* height: auto; */
          & .description,
          .challenges,
          .solution {
            padding: 10px 26px 0;
            & h3,
            p {
              font-family: 'Poppins', sans-serif;
              color: ${(props) => props.theme.colors.tertiary};
            }
            & h3 {
              font-size: 32px;
              padding-bottom: 16px;
            }
            & p {
              font-size: 18px;
              padding-bottom: 16px;
            }
          }
          & .description {
            & p {
              padding-bottom: 30px;
            }
          }
          & .col-1 {
            height: 100%;
            width: 50%;
            flex: 1 1 50%;
            /* background: purple; */
          }
          & .col-2 {
            height: 100%;
            flex: 1 1 50%;

            /* background: dodgerblue; */
          }
        }
      }
      & .imgWrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 50%;
        height: 100%;
        justify-content: center;
        & .imgOverlay {
          opacity: 0;
          transition: opacity 0.2s;
        }
        & iframe {
          flex: 1 0 100%;
          width: 100%;
          height: 50%;
          object-fit: cover;
          padding: 0.2rem;
          border-radius: 15px;
        }
        & img {
          width: 45%;
          height: fit-content;
          margin: 0 10px 0 20px;
          border-radius: 10px;
          /* flex: 0 1 50%; */
        }
      }
      & .cardSkillBar,
      & .expandButton {
        opacity: 0;
        visibility: none;
        position: absolute;
        transition: opacity 0.5s;
        transform-style: preserve-3d;
        transform: translate3d(0, 0, 15px);
      }
      & .cardSkillBar {
        bottom: -16px;
        left: 6px;
        color: ${(props) => props.theme.colors.tertiary};
        & i {
          padding: 5px 10px;
        }
      }
      & .expandButton {
        color: ${(props) => props.theme.colors.tertiary};
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding: 10px;
        top: 50%;
        left: 50%;
        transform-style: preserve-3d;
        transform: translate3d(-50%, -50%, 15px);
        & i {
          font-size: 1.6rem;
        }
      }
    }
    & .card::after {
      content: 'See more';
      color: ${(props) => props.theme.colors.tertiary};
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate3d(-50%, -50%, 15px);
      transform-style: preserve-3d;
      font-size: 0.8rem;
      opacity: 0;
      transition: opacity 0.5s;
    }
    & .card:hover {
      & .cardSkillBar,
      & .expandButton {
        opacity: 1;
        visibility: visible;
      }
      &:hover::after {
        opacity: 1;
      }
    }
  }
`;

export default ProjectsCard;
