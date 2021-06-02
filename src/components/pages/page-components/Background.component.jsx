import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Videos & posters

import homePoster from '../../../assets/new/spring3.jpg';
import homeFull from '../../../assets/new/spring.mp4';

import aboutPoster from '../../../assets/new/summer3.jpg';
import aboutFull from '../../../assets/new/summer.mp4';

import projectsPoster from '../../../assets/new/autumn3.jpg';
import projectsFull from '../../../assets/new/autumn.mp4';

import contactPoster from '../../../assets/new/winter3.jpg';
import contactFull from '../../../assets/new/winter.mp4';

function Background({ page }) {
  const [video, setVideo] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const [poster, setPoster] = useState([]);

  useEffect(() => {
    const getVideoSrc = (width) => {
      if (video === 'home') {
        // if (width >= 1440) setVideoSrc(homeUltraHD);
        if (width >= 1080) setVideoSrc(homeFull);
        if (width <= 480) setVideoSrc(null);
      }
      if (video === 'about') {
        if (width >= 1080) setVideoSrc(aboutFull);
        if (width <= 480) setVideoSrc(null);
      }
      if (video === 'projects') {
        if (width >= 1080) setVideoSrc(projectsFull);
        if (width <= 480) setVideoSrc(null);
      }
      if (video === 'contact') {
        if (width >= 1080) setVideoSrc(contactFull);
        if (width <= 480) setVideoSrc(null);
      }
    };
    // const { page } = props;
    if (page.pathname === '/') {
      setVideo('home');
      setPoster(homePoster);
      getVideoSrc(window.innerWidth);
    } else if (page.pathname === '/about') {
      setVideo('about');
      setPoster(aboutPoster);
      getVideoSrc(window.innerWidth);
    } else if (page.pathname === '/projects') {
      setVideo('projects');
      setPoster(projectsPoster);
      getVideoSrc(window.innerWidth);
    } else if (page.pathname === '/contact') {
      setVideo('contact');
      setPoster(contactPoster);
      getVideoSrc(window.innerWidth);
    }
  }, [page, video]);

  return (
    <BackgroundContainer>
      <div className='overlay'></div>
      <video muted loop autoPlay preload='auto' src={videoSrc} />
      <img className='fallback' src={poster} alt={`${poster} background`} />
    </BackgroundContainer>
  );
}
const BackgroundContainer = styled.div`
  z-index: -100;
  overflow: hidden;

  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.black};
    z-index: -98;
    /* mix-blend-mode: hue; */
    mix-blend-mode: darken;
    opacity: 0.6;
    background-blend-mode: darken;
    transition: background-color 0.5s;
    /* backdrop-filter: blur(1px); */
  }
  video {
    z-index: -99;
    width: 100vw;
    height: 100%;
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
  .fallback {
    z-index: -100;
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
  }
`;
export default Background;
