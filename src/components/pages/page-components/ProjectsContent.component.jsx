import React, { useState } from 'react';
import styled from 'styled-components';
// import ProjectsCard from './ProjectsCard.component';
import Button from '../../global-components/Button.component';

import zenifyImg from '../../../assets/zenifyimgplaceholder.png';
import oldPortfolioImg from '../../../assets/silas-cundiff.dev_.png';
const ContentWrap = styled.div`
  height: 100%;
  width: 100%;
  & .container {
    height: 75vh;
    width: 60%;
    margin: 8rem auto;
    padding: 2rem;
    overflow-y: auto;

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
      margin: 0 auto 2rem;
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
          transition: all 0.5s;

          & h2 {
            font-family: 'Pacifico', cursive;
            font-size: calc(2rem + 2.8vw);
          }
          & h3 {
            font-size: calc(0.6rem + 1.4vw);
            font-weight: 400;
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
          & .linksContainer {
            display: flex;
            justify-content: space-evenly;
            & .projectsButton {
              font-size: calc(1rem + 1.4vw);
            }
          }
          & p {
            margin-bottom: 4rem;
          }
          & .icons {
            font-size: calc(2rem + 3vw);
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: baseline;
            margin: 4rem 0;
            & i {
              margin: 0 auto;
            }
          }
        }
      }
      & .expanded {
        max-height: 200vh;
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
        display: none;
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
            & .icons {
              font-size: calc(2rem + 4vw);
            }
          }
        }
        & .expanded {
          max-height: 100vh;
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
          display: inline;
          position: absolute;
          top: 1rem;
          right: 2rem;
          font-size: calc(2rem + 4vw);
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
  }
  @media screen and (max-width: 576px) {
    & .container {
      width: 100%;
      padding: 0.6rem;
      margin: 4rem auto 0;
      & .project {
        & .projectHeader {
          & .projectHeaderText {
            flex-direction: column;
            align-items: center;
            & h2 {
              font-size: calc(2rem + 6vw);
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
          }
          & .col-4 {
            & .linksContainer {
              display: flex;
              justify-content: space-around;
            }
            & .icons {
              font-size: calc(2rem + 4vw);
              margin: 1rem 0;
            }
          }
        }
        & .expanded {
          max-height: 200vh;

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
                particle audio visualizer. The main focus of the project was the
                audio visualizer, and making the libraries to work together was
                a fun challenge.
              </p>
            </div>
            <div className='col-2'>
              <h3>The Challenge</h3>
              <p>
                The Spotify's Web Api provides audio analysis of a track. I
                needed a way to track the listener's current position in the
                song, then retrieve the relevant song segment information.
              </p>
            </div>
            <div className='col-3'>
              <h3>The Solution</h3>
              <p>
                I designed a timestamp system to keep track of different
                timestamps such as: song start time, user interactions, etc. I
                use the timestamps and the song data to calculate the current
                song segment.
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
                <i className='fab fa-html5'></i>
                <i className='fab fa-css3-alt'></i>
                <i className='fab fa-js-square'></i>
                <i className='fab fa-react'></i>
              </div>
            </div>
          </div>
          {/* <div
            className='expander'
            onClick={() => handleClick(expandedProjects.zenify, 'zenify')}
          >
            <i
              className={`fas fa-chevron-down ${
                expandedProjects.zenify.expanded ? 'rotate' : null
              }`}
            ></i>
            <span>
              show {expandedProjects.zenify.expanded ? 'less' : 'more'}
            </span>
          </div> */}
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
              <h2>Old Portfolio</h2>
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
                This was my first no hand-holding project after I felt like I
                was comfortable with basic CSS/JS. <br /> <br /> I wanted to use
                my logo and four seasons as a theme for the site, and have the
                background update based on what page the user was on. <br />{' '}
                <br /> Additionally, I wanted to make the site side-scrolling
                because I wanted to emulate a slideshow experience using
                scroll-snapping.
              </p>
            </div>
            <div className='col-2'>
              <h3>The Challenge</h3>
              <p>
                The main challenge was getting a vertical scrolling website to
                scroll sideways via mousewheel, and achieving this cause many
                unexpected bugs and issues that I had to find a work-around for.
                <br /> <br /> for instance, using JavaScript to detect your
                scroll position on the page is pretty challenging when your site
                is technically always scrolled to the top.
              </p>
            </div>
            <div className='col-3'>
              <h3>The Solution</h3>
              <p>
                To get side-scrolling to function on mousewheel, I used a little
                trick where you flip the websites content on it's side, then put
                it inside a box and flip that box in the opposite direction. So,
                what you see on the website is technically a view of the website
                at a 90&deg; angle. I then used a bit of overflow css trickery
                to make the content scroll-able.
                <br /> <br /> As stated, while this trick worked, it caused many
                bugs I had to spend dozens of hours troubleshooting.
              </p>
            </div>
            <div className='col-4'>
              <h3>Extra info</h3>
              <p>More details available on GitHub</p>
              <div className='linksContainer'>
                <Button
                  url='https://github.com/SilasCundiff/zenify'
                  innerText='update'
                  customClass='projectsButton'
                />
                <Button
                  url='https://zenify-server.herokuapp.com/'
                  innerText='update'
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
          {/* <div
            className='expander'
            onClick={() =>
              handleClick(expandedProjects.silascundiff, 'silascundiff')
            }
          >
            <i
              className={`fas fa-chevron-down ${
                expandedProjects.silascundiff.expanded ? 'rotate' : null
              }`}
            ></i>
            <span>
              show {expandedProjects.silascundiff.expanded ? 'less' : 'more'}
            </span>
          </div> */}
          <div className='fixedExpander'>
            <i
              className={`fas fa-chevron-down ${
                expandedProjects.silascundiff.expanded ? 'rotate' : null
              }`}
            ></i>
          </div>
        </div>
      </div>
    </ContentWrap>
  );
}

export default ProjectsContent;
