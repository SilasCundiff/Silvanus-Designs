import React from 'react';
import styled from 'styled-components';
import ProjectsCard from './ProjectsCard.component';
import img from '../../../assets/zenifyimgplaceholder.png';
const ContentWrap = styled.div`
  padding: 2vh;
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  gap: 2vh 1vw;
  overflow-y: auto;
  overflow-x: hidden;
  @media only screen and (max-width: 1440px) {
    gap: 2vh 5vw;
  }
  @media only screen and (max-width: 1280px) {
    gap: 0;
    padding: 0;
    margin-top: 0;
  }
  /* @media only screen and (max-width: 1280px) {
    flex-wrap: nowrap;
    flex-direction: column;
    justify-items: center;
    align-items: center;

  } */
`;



function ProjectsContent() {
  //Example icons object values
  // const icons = {
  //     React: false,
  //     Html: false,
  //     Css: false,
  //     JS: false,
  //     Sass: false,
  //     Bootstrap: false,
  //   };

  return (
    <ContentWrap id='projectsWrap' className='contentWrap'>
      <ProjectsCard
        title={'Zenify'}
        subtitle={'A Particle based Spotify Player & Audio Visualizer'}
        imgSrc={img}
        icons={{
          react: true,
          html: true,
          css: true,
          js: true,
        }}
        id="ZenifyCard"
      />
      <ProjectsCard
        title={'Test'}
        subtitle={'A Particle based Spotify Player & Audio Visualizer'}
        imgSrc={img}
        icons={{
          react: true,
          html: true,
          css: true,
          js: true,
        }}
      />
      <ProjectsCard
        title={'Zenify'}
        subtitle={'A Particle based Spotify Player & Audio Visualizer'}
        imgSrc={img}
        icons={{
          react: true,
          html: true,
          css: true,
          js: true,
        }}
      />
      <ProjectsCard
        title={'Zenify'}
        subtitle={'A Particle based Spotify Player & Audio Visualizer'}
        imgSrc={img}
        icons={{
          react: true,
          html: true,
          css: true,
          js: true,
        }}
      />
    </ContentWrap>
  );
}

export default ProjectsContent;
