import React from 'react';
import styled from 'styled-components';
// import ProjectsCard from './ProjectsCard.component';
import Button from '../../global-components/Button.component';

import img from '../../../assets/zenifyimgplaceholder.png';
const ContentWrap = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  /* background-color: dodgerblue; */
  & .container {
    /* background-color: #555555; */
    height: 100%;
    width: 90%;
    margin: 4rem auto;
    padding: 2rem;
    overflow-y: auto;
    & .project {
      width: 100%;
      height: fit-content;
      background-color: rgba(20, 20, 20, 0.6);
      backdrop-filter: blur(15px);
      color: ${(props) => props.theme.colors.tertiary};
      border-bottom: solid white 0.4rem;
      & .projectHeader {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        & .projectHeaderText {
          flex: 1 1 50%;
          text-align: center;
          /* background-color: black; */
          & h2 {
            font-family: 'Pacifico', cursive;
            font-size: calc(2rem + 9.6vw);
            line-height: 160%;
          }
          & h3 {
            font-size: calc(1rem + 2.4vw);
            font-weight: 400;
          }
        }
        & .projectHeaderImage {
          padding: 2rem;
          flex: 1 1 50%;
          height: 40vh;
          width: auto;
          object-fit: cover;
          /* background-color: gold; */
        }
      }
      & .projectBody {
        /* font-size: calc(2rem + 2vw); */
        display: flex;
        flex-wrap: wrap;
        & .col-1,
        .col-2,
        .col-3,
        .col-4 {
          flex: 1 1 25%;
          padding: 2rem;

          /* background-color: black; */
          & h3 {
            font-size: calc(1rem + 1.6vw);
          }
          & p {
            font-size: calc(0.6rem + 0.9vw);
            text-align: left;
          }
        }
        & .col-4 {
          & .icons {
            font-size: calc(2rem + 3vw);
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            /* background-color: red; */
            align-items: baseline;
            & i {
              margin: 0 auto;
            }
          }
        }
      }
      & .expander {
        font-size: calc(2rem + 2vw);
        text-align: center;
        margin: 2rem auto;
      }
    }
  }
`;

function ProjectsContent() {
  return (
    <ContentWrap id='projectsWrap' className='contentWrap'>
      <div className='container'>
        <div className='project'>
          <div className='projectHeader'>
            <div className='projectHeaderText'>
              <h2>Zenify</h2>
              <h3>A particle audio visualizer</h3>
            </div>
            <img src={img} alt='' className='projectHeaderImage' />
          </div>
          <div className='projectBody'>
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
                />
                <Button
                  url='https://zenify-server.herokuapp.com/'
                  innerText='Demo'
                />
              </div>
              <div className='icons'>
                <p>Made in:</p>
                <i className='fab fa-html5'></i>
                <i className='fab fa-css3-alt'></i>
                <i className='fab fa-js-square'></i>
                <i className='fab fa-react'></i>

                {/*            <i className='fab fa-bootstrap'></i>
                <i className='fab fa-sass'></i> */}
              </div>
            </div>
          </div>
          <div className='expander'>
            <i className='fas fa-chevron-down'></i>
            <span>show more</span>
          </div>
        </div>
      </div>
    </ContentWrap>
  );
}

export default ProjectsContent;
