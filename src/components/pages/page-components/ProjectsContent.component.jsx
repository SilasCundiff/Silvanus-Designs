import React, { useState } from 'react';
import styled from 'styled-components';
// import ProjectsCard from './ProjectsCard.component';
import Button from '../../global-components/Button.component';

import zenifyImg from '../../../assets/zenifyimgplaceholder.png';
import sakuraSeedsImg from '../../../assets/SakuraSeeds.png';
import oldPortfolioImg from '../../../assets/silas-cundiff.dev_.png';
const ContentWrap = styled.div`
  /* height: 100vh; */
  width: 100%;
  /* overflow: hidden; */
  & .container {
    height: 85vh;
    /* height: 100%; */
    width: 60%;
    margin: 0 auto;
    padding: 2rem 2rem 0;
    overflow-y: scroll;

    flex-direction: column;
    scrollbar-width: thin;
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors.tertiary};
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.secondary};
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${(props) => props.theme.colors.primary};
    }
    & .project {
      border-radius: 5px;
      margin-bottom: 2rem;
      margin: 0 auto 4rem;
      width: 80%;
      height: fit-content;
      backdrop-filter: blur(5px);
      position: relative;
      color: ${(props) => props.theme.colors.tertiary};
      background: rgba(20, 20, 20, 0.6);
      & .projectHeader {
        width: 100%;

        & .projectHeaderText {
          display: flex;
          justify-content: space-evenly;
          align-items: baseline;
          background: rgba(20, 20, 20, 0.8);
          width: 100%;
          border-radius: 5px;
          padding-bottom: 2rem;
          padding-top: 2rem;
          transition: all 0.5s;

          & h2 {
            font-family: 'Pacifico', cursive;
            font-size: calc(2rem + 1.9vw);
          }
          & h3 {
            font-size: calc(0.6rem + 0.8vw);
            font-weight: 300;
          }
        }

        & .projectHeaderImage {
          max-width: 100%;
          margin: 0 auto;
          border-radius: 6px;
          transition: all 0.5s;
        }
      }

      & .silascundiffHeader {
        flex-direction: row-reverse;
      }
      & .projectBody {
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        max-height: 0;

        transform-origin: initial;
        transition: max-height 1s;
        & .col-1,
        .col-2,
        .col-3,
        .col-4 {
          flex: 1 1 25%;
          padding: 2rem;
          & h3 {
            font-size: calc(1rem + 1.6vw);
          }
          & p {
            font-size: calc(0.6rem + 0.9vw);
            text-align: left;
          }
        }
        & .col-4 {
          display: flex;
          flex-wrap: wrap;
          & .linksContainer {
            flex: 1 1 60%;
            display: flex;
            justify-content: space-evenly;
            & .projectsButton {
              font-size: calc(0.8rem + 1.2vw);
            }
          }
          & p {
            margin-bottom: 3vh;
            flex: 1 1 100%;
          }
          & .icons {
            margin: 0 0 auto;
            font-size: calc(2rem + 2.4vw);
            flex: 1 1 30%;
            display: flex;
            & p {
              max-width: 40%;
            }
            & i {
              /* width: 25%; */
              margin: 0 auto;
            }
          }
        }
      }
      & .expanded {
        max-height: 400vh;
        transform-origin: initial;
      }

      & .expander {
        font-size: calc(2rem + 2vw);
        width: 100%;
        cursor: pointer;
        line-height: 10%;
        padding: 1rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(20, 20, 20, 0.8);
        border-radius: 0 0 5px;
        & .rotate {
          transform: rotate(180deg);
          transition: transform 0.2s;
        }
        & i {
          transition: transform 0.2s;
        }
        & span {
          padding-left: 2rem;
          font-size: calc(0.2rem + 1.5vw);
        }
      }
      & .fixedExpander {
        display: inline;
        position: absolute;
        top: 1rem;
        right: 2rem;
        font-size: calc(2rem + 2vw);
        line-height: 10%;
        z-index: 50;
        & i {
          transition: transform 0.2s;
        }
        & .rotate {
          transform: rotate(180deg);
          transition: transform 0.2s;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    & .container {
      width: 80%;
      & .project {
        & .projectHeader {
          & .projectHeaderText {
            & h2 {
              /* font-size: calc(2rem + 2vw); */
            }
            & h3 {
              /* font-size: calc(1rem + 4vw); */
            }
          }
          & .projectHeaderImage {
            /* height: 40vw; */
          }
        }

        & .projectBody {
          & .col-1,
          .col-2,
          .col-3,
          .col-4 {
            flex: 1 1 50%;
            padding: 2rem;
            & h3 {
              font-size: calc(1rem + 2vw);
            }
            & p {
              font-size: calc(0.6rem + 1.6vw);
              text-align: left;
            }
          }
          & .col-4 {
            display: flex;
            flex-wrap: wrap;
            & .linksContainer {
              flex: 1 1 60%;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              & .projectsButton {
                font-size: calc(0.8rem + 1.2vw);
              }
            }
            & p {
              /* margin-bottom: 3vh; */
              /* flex: 1 1 100%; */
            }
            & .icons {
              margin: 0 0 auto;
              font-size: calc(2rem + 4vw);
              flex: 1 1 30%;
              display: flex;
              & p {
                max-width: 40%;
              }
              & i {
                /* width: 25%; */
                margin: 0 auto;
              }
            }
          }
        }
        & .expanded {
          max-height: 400vh;
          transition: max-height 1s;
          transform-origin: initial;
        }

        & .expander {
          font-size: calc(2rem + 3vw);
          & span {
            padding-left: 2rem;
            font-size: calc(1rem + 2vw);
          }
        }
        & .fixedExpander {
          font-size: calc(2rem + 4vw);
        }
      }
    }
  }
  @media screen and (max-width: 576px) {
    & .container {
      width: 100%;
      height: 100%;
      padding: 0.6rem;
      margin: 2rem auto 0;

      & .project {
        & .projectHeader {
          & .projectHeaderText {
            flex-direction: column;
            align-items: center;
            & h2 {
              font-size: calc(2rem + 3.2vw);
            }
            & h3 {
              font-size: calc(1rem + 2vw);
            }
          }
          & .projectHeaderImage {
            /* height: auto; */
            /* width: 90vw; */
            /* padding: 0; */
          }
        }

        & .projectBody {
          & .col-1,
          .col-2,
          .col-3,
          .col-4 {
            flex: 1 1 50%;
            padding: 1rem;
            & h3 {
              font-size: calc(1rem + 4vw);
            }
            & p {
              font-size: calc(1rem + 2vw);
              text-align: left;
            }
          }
          & .col-3,
          .col-4 {
            flex: 1 1 100%;
            flex-direction: column;
          }
          & .col-4 {
            & .linksContainer {
              display: flex;
              justify-content: space-around;
            }
            & .icons {
              font-size: calc(2rem + 4vw);
              /* margin: 1rem 0; */
            }
          }
        }
        & .expanded {
          max-height: 400vh;

          transition: max-height 1s;
          transform-origin: initial;
        }

        & .expander {
          padding-top: 1rem;
          margin-bottom: 0;
          font-size: calc(2rem + 3vw);
          & span {
            padding-left: 1rem;
            font-size: calc(1rem + 2vw);
          }
        }
      }
    }
  }
`;

function ProjectsContent() {
  const [expandedProjects, setExpandedProjects] = useState({
    zenify: {
      expanded: false,
    },
    sakuraSeeds: {
      expanded: false,
    },
    silascundiff: {
      expanded: false,
    },
  });

  const handleClick = ({ expanded }, project) => {
    const toggledProjects = {
      ...expandedProjects,
      [project]: { expanded: !expanded },
    };

    setExpandedProjects(toggledProjects);
  };

  return (
    <ContentWrap id='projectsWrap' className='contentWrap'>
      <div className='container'>
        <div
          className={`project`}
          onClick={() => handleClick(expandedProjects.zenify, 'zenify')}
        >
          <div
            className={`projectHeader ${
              expandedProjects.zenify.expanded ? 'expandedHeader' : ''
            }`}
          >
            <div className={`projectHeaderText`}>
              <h2>Zenify</h2>
              <h3>A particle audio visualizer</h3>
            </div>
            <img
              src={zenifyImg}
              alt='Zenify Website'
              className='projectHeaderImage'
            />
          </div>
          <div
            className={`projectBody ${
              expandedProjects.zenify.expanded ? 'expanded' : ''
            }`}
          >
            <div className='col-1'>
              <h3>The Rundown</h3>
              <p>
                Zenify uses Spotify's web api, and TsParticles to power a
                particle audio visualizer. Search for a song and watch the
                particles dance!
              </p>
            </div>
            <div className='col-2'>
              <h3>The Challenge</h3>
              <p>
                The Spotify's Web Api provides audio analysis of a track in the
                form of an object, but there isn't an easy way to retrieve
                current playback analysis in real time.
              </p>
            </div>
            <div className='col-3'>
              <h3>The Solution</h3>
              <p>
                I designed a timestamp system to keep track of different
                timestamps such as: song start time, user interactions, etc.
                Then I use the timestamps and the song data to calculate the
                current songs segment analysis.
              </p>
            </div>
            <div className='col-4'>
              <h3>Extra info</h3>
              <p>More details available on GitHub</p>
              <div className='linksContainer'>
                <Button
                  url='https://github.com/SilasCundiff/zenify'
                  innerText='Github'
                  customClass='projectsButton'
                />
                <Button
                  url='https://zenify-server.herokuapp.com/'
                  innerText='Demo'
                  customClass='projectsButton'
                />
              </div>
              <div className='icons'>
                <p>Made in:</p>

                <i className='fab fa-react'></i>
              </div>
            </div>
          </div>

          <div className='fixedExpander'>
            <i
              className={`fas fa-chevron-down ${
                expandedProjects.zenify.expanded ? 'rotate' : null
              }`}
            ></i>
          </div>
        </div>

        <div
          className='project'
          onClick={() =>
            handleClick(expandedProjects.silascundiff, 'silascundiff')
          }
        >
          <div
            className={`projectHeader silascundiffHeader ${
              expandedProjects.silascundiff.expanded ? 'expandedHeader' : ''
            }`}
          >
            <div className='projectHeaderText'>
              <h2>SilasCundiff.Dev</h2>
              <h3>Artistic but not scalable</h3>
            </div>
            <img
              src={oldPortfolioImg}
              alt='Zenify Website'
              className='projectHeaderImage'
            />
          </div>
          <div
            className={`projectBody ${
              expandedProjects.silascundiff.expanded ? 'expanded' : null
            }`}
          >
            <div className='col-1'>
              <h3>The Rundown</h3>
              <p>
                One of my previous portoflio designs. Visually, I still love
                this project, but because of the way it was designed it became
                hard to maintain.
              </p>
            </div>
            <div className='col-2'>
              <h3>The Challenge</h3>
              <p>
                The main challenge was getting the website to scroll sideways
                via mousewheel, and achieving this caused many bugs that needed
                to be resolved.
              </p>
            </div>
            <div className='col-3'>
              <h3>The Solution</h3>
              <p>
                I used CSS to flip the websites content 90&deg;, then put it
                inside a container and flipped it back -90&deg;. While this
                trick worked, it caused many bugs, and was hard to maintain and
                troubleshoot.
              </p>
            </div>
            <div className='col-4'>
              <h3>Extra info</h3>
              <p>More details available on GitHub</p>
              <div className='linksContainer'>
                <Button
                  url='https://github.com/SilasCundiff/My_Portoflio'
                  innerText='Github'
                  customClass='projectsButton'
                />
                <Button
                  url='https://silascundiff.github.io/Portfolio/'
                  innerText='Site Link'
                  customClass='projectsButton'
                />
              </div>
              <div className='icons'>
                <p>Made in:</p>
                <i className='fab fa-html5'></i>
                <i className='fab fa-css3-alt'></i>
                <i className='fab fa-js-square'></i>
              </div>
            </div>
          </div>
          <div className='fixedExpander'>
            <i
              className={`fas fa-chevron-down ${
                expandedProjects.silascundiff.expanded ? 'rotate' : null
              }`}
            ></i>
          </div>
        </div>
        <div
          className={`project`}
          onClick={() =>
            handleClick(expandedProjects.sakuraSeeds, 'sakuraSeeds')
          }
        >
          <div
            className={`projectHeader ${
              expandedProjects.sakuraSeeds.expanded ? 'expandedHeader' : ''
            }`}
          >
            <div className={`projectHeaderText`}>
              <h2>Sakura Seeds</h2>
              <h3>Custom Component Library</h3>
            </div>
            <img
              src={sakuraSeedsImg}
              alt='Sakura Seeds Website'
              className='projectHeaderImage'
            />
          </div>
          <div
            className={`projectBody ${
              expandedProjects.sakuraSeeds.expanded ? 'expanded' : ''
            }`}
          >
            <div className='col-1'>
              <h3>The Rundown</h3>

              <p>
                <strong>WORK IN PROGRESS</strong> <br />
                Sakura Seeds is an ever growing component library. Created to
                build a user-custimizable theme website, and to support future
                projects.
              </p>
            </div>
            <div className='col-2'>
              <h3>The Challenge</h3>
              <p>
                Designing a theme builder that allows user input to update the
                colors, fonts, layouts, and learning how component libraries are
                made.
              </p>
            </div>
            <div className='col-3'>
              <h3>The Solution</h3>
              <p>
                I created a theme builder that can take arguments for the hue,
                lightness, and fonts selected by a user, and returns a built
                theme that can be passed to a Theme Provider.
              </p>
            </div>
            <div className='col-4'>
              <h3>Extra info</h3>
              <p>More details available on GitHub</p>
              <div className='linksContainer'>
                <Button
                  url='https://github.com/SilasCundiff/sakura-seeds'
                  innerText='Github'
                  customClass='projectsButton'
                />
                <Button
                  url='https://silascundiff.github.io/sakura-blossoms/'
                  innerText='Demo site'
                  customClass='projectsButton'
                />
              </div>
              <div className='icons'>
                <p>Made in:</p>
                <i className='fab fa-react'></i>
              </div>
            </div>
          </div>

          <div className='fixedExpander'>
            <i
              className={`fas fa-chevron-down ${
                expandedProjects.sakuraSeeds.expanded ? 'rotate' : null
              }`}
            ></i>
          </div>
        </div>
      </div>
    </ContentWrap>
  );
}

export default ProjectsContent;
