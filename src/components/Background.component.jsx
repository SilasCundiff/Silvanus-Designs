import React from 'react'
import styled from 'styled-components'
import spring from '../assets/pexels-taryn-elliott-5234994.mp4'
function Background() {
    return (
        <BackgroundContainer>
            <div className="overlay"></div>
            <video muted loop autoPlay src={spring}></video>
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
        background: #ffa3ba;
        z-index: -98;
        mix-blend-mode: hue;
        backdrop-filter: blur(6px);
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
