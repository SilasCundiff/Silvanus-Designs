import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';

const Card = styled.div`
  .tilt {
    transform-style: preserve-3d;
  }
  & .card {
    height: 300px;
    width: 450px;
    display: flex;
    position: relative;
  }
  & .cardText {
    position: absolute;
    color: ${(props) => props.theme.colors.tertiary};
    top: -15%;
    right: -15%;
    z-index: 2;
    transform-style: preserve-3d;
  }
  & h2,
  & p {
    font-family: 'Poppins', sans-serif;
    transform-style: preserve-3d;
    transform: translate3d(0, 0, 15px);
    transition: 0.5s;
  }
  & p {
    margin-top: 15px;
    width: 200px;
  }
  & .cardText h2 {
    font-size: 72px;
    line-height: 2rem;
  }
  & .cardText p {
    font-size: 24px;
    line-height: 0.8rem;
  }

  & .imgOverlay {
    width: 450px;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    z-index: 0;
    border-radius: 10px;
  }
  & img {
    width: 100%;
    margin: auto;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }
  & .cardSkillBar,
  & .expandButton {
    opacity: 0;
    visibility: none;
    position: absolute;
    transition: opacity 0.5s;
    transform-style: preserve-3d;
    transform: translate3d(0, 0, 15px);
  }
  & .cardSkillBar {
    bottom: -16px;
    left: 6px;
    color: ${(props) => props.theme.colors.tertiary};
    & i {
      padding: 5px 10px;
    }
  }
  & .expandButton {
    color: ${(props) => props.theme.colors.tertiary};
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 10px;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    transform: translate3d(-50%, -50%, 15px);
    & i {
      font-size: 1.6rem;
    }
  }
  & .card::after {
    content: 'See more';
    color: ${(props) => props.theme.colors.tertiary};
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate3d(-50%, -50%, 15px);
    transform-style: preserve-3d;
    font-size: 0.8rem;
    opacity: 0;
    transition: opacity 0.5s;
  }
  & .card:hover {
    & .cardSkillBar,
    & .expandButton {
      opacity: 1;
      visibility: visible;
    }
    &:hover::after {
      opacity: 1;
    }
  }
`;

function ProjectsCard({ title, subtitle, imgSrc, icons }) {
  return (
    <Card>
      <Tilt
        className='tilt'
        perspective={1000}
        tiltMaxAngleX={20}
        tiltMaxAngleY={10}
        transitionSpeed={1000}
      >
        <div className='card'>
          <div className='cardText'>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <div className='imgWrapper'>
            <div className='imgOverlay'></div>
            <img src={imgSrc} alt='' className='cardImage' />
          </div>
          <div className='cardSkillBar'>
            {icons.html ? <i className='fab fa-html5'></i> : null}
            {icons.css ? <i className='fab fa-css3-alt'></i> : null}
            {icons.js ? <i className='fab fa-js-square'></i> : null}
            {icons.react ? <i className='fab fa-react'></i> : null}
            {icons.bootstrap ? <i className='fab fa-bootstrap'></i> : null}
            {icons.sass ? <i className='fab fa-sass'></i> : null}
          </div>
          <button className='expandButton'>
            <i className='fas fa-expand'></i>
          </button>
        </div>
      </Tilt>
    </Card>
  );
}

export default ProjectsCard;
