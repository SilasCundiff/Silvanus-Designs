import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import home from '../assets/spring.mp4';
import about from '../assets/summer.mp4';
import projects from '../assets/autumn.mp4'
import contact from '../assets/winter.mp4'
function Background(props) {
    console.log('props', props)
    const [video, setVideo] = useState(null)
    useEffect(() => {
        const {page} = props
       if (page.pathname === '/') {
            setVideo(home)
        } else if (page.pathname === '/about') {
            setVideo(about);
        } else if (page.pathname === '/projects') {
            setVideo(projects);
        } else if (page.pathname === '/contact') {
            setVideo(contact);
        }
    }, [video, props])
    return (
        <BackgroundContainer>
            <div className="overlay"></div>
            <video muted loop autoPlay src={video}></video>
            <div className="fallback"></div>
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
    }
    .fallback {
        z-index: -100;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: #1a1a1a;
    }

`;
export default Background
