import React from 'react'
import styled from 'styled-components'
import image from '../assets/sebastian-unrau-sp-p7uuT0tw-unsplash.jpg'
import spring from '../assets/pexels-taryn-elliott-5234994.mp4'
function Background() {
    return (
        <BackgroundContainer>
            <div className="overlay"></div>
            <video muted loop autoPlay src={spring}></video>
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

`;
export default Background
