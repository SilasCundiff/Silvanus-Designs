import React from 'react';
import styled from 'styled-components';
import ProjectsCard from './ProjectsCard.component';
import img from '../../../assets/zenifyimgplaceholder.png';
const ContentWrap = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  #ZenifyCard {
    position: absolute;
    top: 15%;
    left: 10%;
  }
  #ZenifyCard2 {
    position: absolute;
    top: 60%;
    left: 10%;
  }
  #ZenifyCard3 {
    position: absolute;
    top: 15%;
    right: 10%;
  }
  #ZenifyCard4 {
    position: absolute;
    top: 60%;
    right: 10%;
  }
  @media only screen and (max-width: 1440px) {
    gap: 2vh 5vw;
  }
  @media only screen and (max-width: 1280px) {
    gap: 0;
    padding: 0;
    margin-top: 0;
  }
  @media screen and (max-width: 1279px) {
    height: 85%;
    overflow-y: auto;
    margin-top: auto;
    #ZenifyCard,
    #ZenifyCard2,
    #ZenifyCard3,
    #ZenifyCard4 {
      position: relative;
      top: unset;
      left: unset;
      right: unset;
    }
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
        id='ZenifyCard'
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
        id='ZenifyCard2'
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
        id='ZenifyCard3'
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
        id='ZenifyCard4'
      />
    </ContentWrap>
  );
}

export default ProjectsContent;
