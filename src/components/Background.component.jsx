import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

// Videos & posters
//home
import homeUltraHD from '../assets/1440/spring.mp4';
import homeFullHD from '../assets/1080/spring-1920x1080.mp4';
import homeHD from '../assets/720/spring-1280x720.mp4';
import homePoster from '../assets/480/spring-853x480.png'
//about
import aboutUltraHD from '../assets/1440/summer.mp4';
import aboutFullHD from '../assets/1080/summer-1920x1080.mp4';
import aboutHD from '../assets/720/summer-1280x720.mp4';
import aboutPoster from '../assets/480/summer-853x480.png'
//projects
import projectsUltraHD from '../assets/1440/autumn.mp4';
import projectsFullHD from '../assets/1080/autumn-1920x1080.mp4';
import projectsHD from '../assets/720/autumn-1280x720.mp4';
import projectsPoster from '../assets/480/autumn-853x480.png'
//contact
import contactUltraHD from '../assets/1440/winter.mp4';
import contactFullHD from '../assets/1080/winter-1920x1080.mp4';
import contactHD from '../assets/720/winter-1280x720.mp4';
import contactPoster from '../assets/480/winter-853x480.png'


function Background(props) {
    const [video, setVideo] = useState(null);
    const [videoSrc, setVideoSrc] = useState(null);
    const [poster, setPoster] = useState([]);

   
    useEffect(() => {
        const getVideoSrc = (width,) => {
            if (video === "home") {
                if (width >= 1440) setVideoSrc(homeUltraHD);
                if (width <= 1440 && width >= 1080)  setVideoSrc(homeFullHD);
                if (width <= 1080 && width >= 481)  setVideoSrc(homeHD);
                if (width <= 480) setVideoSrc(null);
            }
            if (video === "about") {
                if (width >= 1080) setVideoSrc(aboutUltraHD);
                if (width <= 1080 && width >= 720) setVideoSrc(aboutFullHD);
                if (width <= 720 && width >= 480) setVideoSrc(aboutHD);
                if (width <= 480)  setVideoSrc(null);
            }
            if (video === "projects") {
                if (width >= 1080)  setVideoSrc(projectsUltraHD);
                if (width <= 1080 && width >= 720)  setVideoSrc(projectsFullHD);
                if (width <= 720 && width >= 480)  setVideoSrc(projectsHD);
                if (width <= 480)  setVideoSrc(null);
            }
            if (video === "contact") {
                if (width >= 1080)  setVideoSrc(contactUltraHD);
                if (width <= 1080 && width >= 720)  setVideoSrc(contactFullHD);
                if (width <= 720 && width >= 480)  setVideoSrc(contactHD);
                if (width <= 480)  setVideoSrc(null);
            }
    }
        const {page} = props
       if (page.pathname === '/') {
            setVideo("home");
            setPoster(homePoster);
            getVideoSrc(window.innerWidth)
        } else if (page.pathname === '/about') {
            setVideo("about");
            setPoster(aboutPoster);
            getVideoSrc(window.innerWidth)
        } else if (page.pathname === '/projects') {
            setVideo("projects");
            setPoster(projectsPoster);
            getVideoSrc(window.innerWidth)
        } else if (page.pathname === '/contact') {
            setVideo("contact"); 
            setPoster(contactPoster);
            getVideoSrc(window.innerWidth)
        }
    } , [props, video]);

    return (
        <BackgroundContainer>
            <div className="overlay"></div>
            <video muted loop autoPlay preload='auto' src={videoSrc}></video>
            <img className="fallback" src={poster} alt={`${poster} background`} />
        </BackgroundContainer>
    )
}
const BackgroundContainer = styled.div`
    z-index: -100;
    .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        top: 0;
        left: 0;
        background-color: ${props => props.theme.colors.secondary};
        z-index: -98;
        mix-blend-mode: hue;
        backdrop-filter: blur(3px);
        transition: background-color 2s;
    }
    video {
        z-index: -99;
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        top: 0;
        left: 0;
        transition: opacity 3s;
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
export default Background
