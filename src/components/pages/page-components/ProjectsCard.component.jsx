import React, { useState } from 'react';
import styled from 'styled-components';


function ProjectsCard({ title, subtitle, imgSrc, icons }) {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card>
      <div className={`cardWrapper ${expanded ? 'expanded' : 'compact'} ${window.innerWidth < 1280 ? 'expanded' : 'compact'}`}>

          <div className='card'>
            <div className='imgWrapper'>
              <div className='imgOverlay'></div>
              <iframe
                className='demoVideo'
                title='test'
                width='560'
                height='315'
                src={`${
                  expanded || window.innerWidth < 1280 ? 'https://www.youtube.com/embed/VoUHpIFCetk' : null
                }`}
                frameBorder='0'
                allow='clipboard-write; encrypted-media; picture-in-picture'
                allowFullScreen
              ></iframe>
              <img src={imgSrc} alt='' className='cardImage mainImage' />
              <img src={imgSrc} alt='' className='cardImage extraImage' />
              <img src={imgSrc} alt='' className='cardImage extraImage' />
              <img src={imgSrc} alt='' className='cardImage extraImage' />
              <img src={imgSrc} alt='' className='cardImage extraImage' />
            </div>
            <div className='cardText'>
              <div className='cardTitleWrapper'>
                <h2 className='cardTitle'>{title}</h2>
                <p className='cardSubTitle'>{subtitle}</p>
              </div>
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
                  <div className='expandedSkillBar'>
                    <h3>Main Skills:</h3>
                    {icons.html ? <i className='fab fa-html5'></i> : null}
                    {icons.css ? <i className='fab fa-css3-alt'></i> : null}
                    {icons.js ? <i className='fab fa-js-square'></i> : null}
                    {icons.react ? <i className='fab fa-react'></i> : null}
                    {icons.bootstrap ? (
                      <i className='fab fa-bootstrap'></i>
                    ) : null}
                    {icons.sass ? <i className='fab fa-sass'></i> : null}
                    <h4>Additional Skills:</h4>
                    <p className='additionalSkills'>
                      Spotify Web Api, tsParticles, styled-components, redux,
                      express
                    </p>
                  </div>
                  <div className='expandedCardLinks'>
                    <a href='https://github.com/SilasCundiff/zenify'>
                      Project Github
                    </a>
                    <a href='zenify-server.herokuapp.com/'>Live Project</a>
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
            <button
              onClick={handleClick}
              className={`closeButton ${expanded ? null : 'hidden'}`}
            >
              <i className='fas fa-times'></i>
            </button>
          </div>
      
      </div>
    </Card>
  );
}
const Card = styled.div`
  flex: 0 1 40%;
  margin-top: 8vh;
  transform-origin: initial;
  .cardWrapper {
    background: none;

    & .card {
      height: 300px;
      width: 450px;
      display: flex;
      position: relative;
      transition: all 0.4s;
      & .cardText {
        position: absolute;
        color: ${(props) => props.theme.colors.tertiary};
        top: -20%;
        right: -15%;
        width: 50%;
        z-index: 2;
 
        & .cardTitleWrapper {
          & .cardTitle,
          & .cardSubTitle {
            font-family: 'Poppins', sans-serif;
            transition: all .2s;
          }
          & .cardTitle {
            font-size: 3.5vw;
            line-height: 2rem;
          }
          & .cardSubTitle {
            margin-top: 15px;
            font-size: 1.4vw;
            line-height: 1rem;
          }
        }
        & .expandedCardText,
        .col-1,
        .col-2 {
          opacity: 0;
          visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
          & * {
            opacity: 0;
            visibility: hidden;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
      & .col-1, .col-2 {
        & p {
          display: none;
        }
      }

        & .imgOverlay {
        width: 450px;
        height: 300px;
        background-color: rgba(0, 0, 0, 0.4);
        position: absolute;
        z-index: 1;
        border-radius: 10px;
        transition: opacity 0.5s 0.4s;
        pointer-events: none;
      }
      & .mainImage {
        width: 100%;
        margin: auto;
        height: 300px;
        object-fit: cover;
        border-radius: 10px;
        position: absolute;
        top: 0;
        left: 0;

        opacity: 1;
        visibility: visible;
        transition: opacity 0.5s 0.4s;
      }
      & .demoVideo,
      .extraImage {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
 
      }
      
     
      & .cardSkillBar,
      & .expandButton {
        opacity: 0;
        visibility: none;
        position: absolute;
        transition: opacity 0.5s;
      }
      & .cardSkillBar {
        bottom: -16px;
        left: 6px;
        z-index: 2;
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
        z-index: 2;
        transform: translate(-50%, -50%);
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
      z-index: 2;
      transform: translate(-50%, -50%);
      font-size: 0.8rem;
      opacity: 0;
      transition: opacity 0.4s;
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
    & .closeButton {
      opacity: 0;
      visibility: hidden;
    }
  }
  /*!! start of expanded styles */
  .expanded {
    margin-top: 2vh;
    transform: translate(-50%, -50%);
    top: 55%;
    left: 50%;
    z-index: 10;
    position: absolute;
    transition: translate 0.2s;
    background: radial-gradient(
      rgba(200, 200, 200, 0.2),
      rgba(200, 200, 200, 0.5)
    );
    border-radius: 15px;
    backdrop-filter: blur(10px);
    transform-origin: initial;
    & .card {
      height: 73vh;
      width: 80vw;
      & .cardText {
        position: relative;
        top: 0;
        right: 0;
        height: 100%;
        width: 75%;
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;

        & .cardTitleWrapper {
          height: fit-content;
          display: flex;
          gap: 0 1.5rem;
          height: 5%;
          margin-top: -5%;
          margin-bottom: 0;
          align-items: center;
          & .cardTitle,
          & .cardSubTitle {
            transform: translate3d(0, 0, 0);
            text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.8);
          }
          & .cardTitle {
            font-size: 6vw;
            line-height: initial;
            margin: 0 auto 0 1.2rem;
            padding: 0;
            height: fit-content;
          }
          & .cardSubTitle {
            font-size: 1.8vw;
            padding-top: 1rem;
            padding-left: 0.2vw;
            line-height: 1.5rem;
            text-align: left;
            flex: 0 1 60%;
          }
        }

        & .expandedCardText {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          height: 95%;
          align-self: flex-end;
          & .description,
          .challenges,
          .solution,
          .expandedSkillBar,
          .expandedCardLinks {
            padding: 10px 30px 20px;
            & h3,
            h4,
            p,
            a {
              font-family: 'Poppins', sans-serif;
              color: ${(props) => props.theme.colors.tertiary};
            }
            & h3 {
              font-size: 1.6vw;
              padding-bottom: 6px;
            }
            & h4 {
              font-size: 1.2vw;
              padding: 16px 0 0 0;
            }
            & p {
              font-size: 1vw;
            }
          }
          & .description {
            & p {
              padding-bottom: 20px;
            }
            & p:last-of-type {
              padding-bottom: 0;
            }
          }
        }
        & .expandedCardText,
        .col-1,
        .col-2 {
          opacity: 1;
          visibility: visible;
          position: relative;
          & * {
            opacity: 1;
            visibility: visible;
            position: relative;
            & p {
              opacity: 1;
            visibility: visible;
            position: relative;
            }
          }
        }
        & .col-1, .col-2 {
        & p {
          display: block;
        }
      }
        & .col-1 {
          height: 100%;
          width: 50%;
          flex: 1 1 50%;
          display: flex;
          flex-direction: column;
          transition: opacity 0.4s 0.8s;
          /* background: purple; */
          & .expandedSkillBar {
            margin: 0 0 0 auto;
            & i {
              padding: 0 1.6vw 0 0;
              font-size: 2.4vw;
            }

            & .additionalSkills {
              padding: 0;
            }
          }
          & .expandedCardLinks {
            display: flex;
            justify-content: center;

            & a {
              background: ${(props) => props.theme.colors.tertiary};
              color: ${(props) => props.theme.colors.primary};
              padding: 0.5vw;
              border-radius: 15px;
              font-size: 1.2vw;
              margin: 0 auto 0 0;
            }
          }
        }
        & .col-2 {
          height: 100%;
          flex: 1 1 50%;
          transition: opacity 0.8s 1.2s;
          display: flex;
          flex-direction: column;
          & .solution {
            margin: 0 0 auto;
          }
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
      & .demoVideo,
      .extraImage {
        opacity: 1;
        visibility: visible;
        position: relative;
        transition: opacity 0.8s 0.4s;

      }
      & .mainImage {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        transition: opacity 0.8s 0.2s;
      }
      & .imgOverlay {
        opacity: 0;
        transition: none;
      }
      & .demoVideo {
        flex: 1 0 100%;
        width: 100%;
        height: 50%;
        object-fit: cover;
        padding: 0.2rem;
        border-radius: 15px;
      }
      & .extraImage {
        width: 45%;
        height: fit-content;
        margin: 0 10px 0 20px;
        border-radius: 10px;
        position: relative;
      }
    }
    & .card:hover {
      & .cardSkillBar,
      & .expandButton {
        opacity: 0;
        visibility: visible;
      }
      &:hover::after {
        opacity: 0;
      }
    }
    & .closeButton {
      opacity: 1;
      visibility: visible;
      position: absolute;
      top: -6vh;
      right: -3vw;
      background: none;
      padding: 0.2rem 0.5rem;
      color: ${(props) => props.theme.colors.tertiary};
      z-index: 1000;
      cursor: pointer;
      border: none;
      & i {
        font-size: 3vw;
      }
    }
    & .closerButton:focus {
      outline: none;
    }
  }
  @media only screen and (max-width: 1280px) {
    .expanded {
    margin-top: 0;
    top:50%;
    left: 50%;
    position: relative;
    & .card {
      height: fit-content;
      width: 80vw;
      flex-direction: column-reverse;
      & .cardText {
        position: relative;
        width: 100%;
        & .cardTitleWrapper {
          margin-top: 0;

          & .cardTitle {
            font-size: 10vw;
          }
          & .cardSubTitle {
            font-size: 3vw;
            padding: 1rem;
            line-height: 2rem;
            flex: 0 1 100%;
          }
        }

        & .expandedCardText {
          /* display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          height: fit-content;
          align-self: unset; */
          & .description,
          .challenges,
          .solution,
          .expandedSkillBar,
          .expandedCardLinks {
            padding: 0;

            & h3 {
              font-size: 5vw;
              padding-bottom: 6px;
            }
            & h4 {
              font-size: 4vw;
              padding: 16px 0 0 0;
            }
            & p {
              font-size: 2vw;
            }
          }
          & .description {
            & p {
              padding-bottom: 20px;
            }
            & p:last-of-type {
              padding-bottom: 20px;
            }
          }
        }
        & .expandedCardText,
        .col-1,
        .col-2 {
          opacity: 1;
          visibility: visible;
          padding: 2vw;
        }

        & .col-1 {
          height: 100%;
          width: 100%;
          flex: 1 0 100%;
          flex-direction: row;
          flex-wrap: wrap;
          transition: opacity 0.4s 0.8s;
          /* background: purple; */
          & .expandedSkillBar {
            margin: 0 auto 0 auto;
            width: 50%;
            flex: 1 1 45%;
            & i {
              padding: 0 1.6vw 0 0;
              font-size: 4vw;
            }

            & .additionalSkills {
              padding: 0;
            }
          }
          & .expandedCardLinks {
            width: 50%;
            flex: 1 1 45%;
            display: flex;
            flex-direction: column;
            & a {
              height: fit-content;
              width: 70%;
              text-align: center;
              padding:2vw;
              font-size: 3vw;
              margin: 20px auto;
            }
          }
        }
      }
    }

    & .imgWrapper {
      flex-direction: row;
      width: 100%;
      height: 100%;

      & iframe {
        flex: 1 0 100%;
        width: 100%;
        height: 400px;
        margin-bottom: 20px;
        padding: 0 20px;
      }
      & img {
        width: 40%;
        height: fit-content;
        margin:0 10px 20px;
      }
    }

    & .closeButton {
      opacity: 0;
      visibility: hidden;
    }
  }
}
@media only screen and (max-width: 768px) {
    .expanded {
      & .imgWrapper {
        & iframe {
          flex: 1 1 100%;
          width: 100%;
          height: 300px;
        }
        & img {
          width: 90%;
          height: fit-content;
          margin:0 10px 20px;
        }
}
    }

}
@media only screen and (max-width: 480px) {
    .expanded {
      & .imgWrapper {
        & iframe {
          flex: 1 1 100%;
          width: 100%;
          height: 200px;
        }
     }
  }
}
`;

export default ProjectsCard;
