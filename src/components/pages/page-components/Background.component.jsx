import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Videos & posters
//home
import homeUltraHD from '../../../assets/1440/spring.mp4';
import homeFullHD from '../../../assets/1440/spring.mp4';
import homeHD from '../../../assets/1440/spring.mp4';
import homePoster from '../../../assets/1440/spring.mp4';
//about
import aboutUltraHD from '../../../assets/1440/summer2.mp4';
import aboutFullHD from '../../../assets/1440/summer2.mp4';
import aboutHD from '../../../assets/1440/summer2.mp4';
import aboutPoster from '../../../assets/1440/summer2.mp4';
//projects
import projectsUltraHD from '../../../assets/1440/autumn2.mp4';
import projectsFullHD from '../../../assets/1440/autumn2.mp4';
import projectsHD from '../../../assets/1440/autumn2.mp4';
import projectsPoster from '../../../assets/1440/autumn2.mp4';
//contact
import contactUltraHD from '../../../assets/1440/winter2.mp4';
import contactFullHD from '../../../assets/1440/winter2.mp4';
import contactHD from '../../../assets/1440/winter2.mp4';
import contactPoster from '../../../assets/1440/winter2.mp4';

function Background({ page }) {
  const [video, setVideo] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const [poster, setPoster] = useState([]);

  useEffect(() => {
    const getVideoSrc = (width) => {
      if (video === 'home') {
        if (width >= 1440) setVideoSrc(homeUltraHD);
        if (width <= 1440 && width >= 1080) setVideoSrc(homeFullHD);
        if (width <= 1080 && width >= 481) setVideoSrc(homeHD);
        if (width <= 480) setVideoSrc(homeHD);
      }
      if (video === 'about') {
        if (width >= 1080) setVideoSrc(aboutUltraHD);
        if (width <= 1080 && width >= 720) setVideoSrc(aboutFullHD);
        if (width <= 720 && width >= 480) setVideoSrc(aboutHD);
        if (width <= 480) setVideoSrc(aboutHD);
      }
      if (video === 'projects') {
        if (width >= 1080) setVideoSrc(projectsUltraHD);
        if (width <= 1080 && width >= 720) setVideoSrc(projectsFullHD);
        if (width <= 720 && width >= 480) setVideoSrc(projectsHD);
        if (width <= 480) setVideoSrc(projectsHD);
      }
      if (video === 'contact') {
        if (width >= 1080) setVideoSrc(contactUltraHD);
        if (width <= 1080 && width >= 720) setVideoSrc(contactFullHD);
        if (width <= 720 && width >= 480) setVideoSrc(contactHD);
        if (width <= 480) setVideoSrc(contactHD);
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
