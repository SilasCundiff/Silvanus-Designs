import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectsCard from './ProjectsCard.component';
import img from '../../../assets/zenifyimgplaceholder.png';
const ContentWrap = styled.div``;

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
    <ContentWrap className='contentWrap'>
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
      {/* <ProjectsCard
        title={'Zenify'}
        subtitle={'A Particle based Spotify Player & Audio Visualizer'}
        imgSrc={img}
        icons={{
          react: true,
          html: true,
          css: true,
          js: true,
        }}
        key='card2'
        id='card2'
      /> */}
    </ContentWrap>
  );
}

export default ProjectsContent;
