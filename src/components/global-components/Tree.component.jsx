import React from 'react';
import styled from 'styled-components';
import Svg from '../../styled/Svg';
import { motion } from 'framer-motion';

const SvgContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    overflow: hidden;
    #inner_board_overlay{
      transition: fill 1s;
      fill: ${(props) => props.theme.colors.secondary};
    } #inner_clip_path{
      stroke: ${(props) => props.theme.colors.secondary};
      fill: none;
      transition: stroke 1s;
    }
`;


const StyledTree = styled(Svg)`
  position: absolute;
  top: 10%;
  left: 50.6%;
  width: auto;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  z-index: 1;
  opacity: .6;
  filter: drop-shadow(5px 5px 1px ${(props) => props.theme.colors.primary});
  transform: translateX(-50%);
  transition: all 1s;
  /* @media screen and (max-width: 1639px) { 
    width: 55%;
  }

  @media screen and (max-width: 1359px) { 
    width: 60%;
  }
  @media screen and (max-width: 1279px) { 
    position: sticky;
    width: 80%;
    margin-bottom: -8vh;
    top: 100%;

    
  }
  @media screen and (max-width: 979px) { 
    width: 100%;

  } */
`;

const trimVariants = {
  hidden: {
    pathLength: 0,
    pathOffset: 1,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    pathOffset: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0
  }
};

const backBoardVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: { duration: 1, delay:1 },
  },

};

const treeVariants = {
  hidden: {
    opacity: 0,
    x: -25,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 2, delay: 2, ease: 'easeInOut' },
  },

};

const foliageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 2, delay: 4, ease: 'easeInOut' },
  },

};



//Non-home Variants 
const altTrimVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {duration: 2}
  },
};

const altBackBoardVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {duration: 2}
  },
};

const altTreeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: { duration: 2, delay: 0, ease: 'easeInOut' },
  },
};
const altFoliageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 2, delay: 1, ease: 'easeInOut' },
  },

};

function Tree({ classname, page }) {
  return (
    <SvgContainer>
      <StyledTree viewBox='0 0 1054.0006 896' className={classname}>
        <g id='Layer_2' data-name='Layer 2'>
          <g id='logo_group'>
            <g id='shield_complete'>
              <g id='clip_group'>
                <motion.path
                  variants={page === '/' ? trimVariants : altTrimVariants}
                  initial='hidden'
                  animate='visible'
                  exit="exit"
                  strokeWidth='5px'
                  id='inner_clip_path'
                  className='cls-1'
                  d='M910.2006,39.8c-164,46-391,18-391,18h-3.7s-425,449-355,551c32.9,47.9,354,281,354,281h5.7Zm-408.8,469.5-.2,157.7-.3,98.3-.5,94.4h0c-62.6-37.5-289.8-232.6-316-270.8-21.4-31.1-31.9-102.6-36.5-182.9h0l43.9,12.3,44.3,12.6,88.6,25.5,88.4,26,44.2,13.1,42.1,12.8.9.3h0l.9.3v.4Zm.1-33.5-1-.3h0l-1-.3-42.5-11.3-44.5-12.1-88.8-24.5-88.7-25-44.3-12.7-44.2-12.8h0c-5.8-144.8,4.9-305,4.9-305,122,34.2,297.1,15.7,349,9.1h0l.5,94.7.3,98.3.2,196.6Zm385.2-69.8c-4.6,80.2-15.2,151.7-36.5,182.9-26.2,38.1-253.4,233.3-316,270.7h0l-.5-94.4-.3-98.3-.2-157.7v-.4l.9-.3h0l.9-.3,42.1-12.8,44.2-13.1,88.4-26,88.6-25.5,44.3-12.6,44.1-12.2Zm1.4-29.1-44.2,12.8-44.3,12.7-88.7,25-88.8,24.5-44.4,12.1-42.5,11.4-1,.3h0l-1,.3v-5.4l.2-196.6.3-98.3.5-94.7h0c51.9,6.6,227,25.1,349-9.1C883.2006,71.8,894.0006,232,888.1006,376.9Z'
                />
              </g>
              <motion.path
                variants={page === '/' ? backBoardVariants : altBackBoardVariants}
                initial='hidden'
                animate='visible'
               
                id='inner_board_overlay'
                className='cls-2'
                d='M910.2006,39.8c-164,46-391,18-391,18h-3.7s-425,449-355,551c32.9,47.9,354,281,354,281h5.7Zm-408.8,469.5-.2,157.7-.3,98.3-.5,94.4h0c-62.6-37.5-289.8-232.6-316-270.8-21.4-31.1-31.9-102.6-36.5-182.9h0l43.9,12.3,44.3,12.6,88.6,25.5,88.4,26,44.2,13.1,42.1,12.8.9.3h0l.9.3v.4Zm.1-33.5-1-.3h0l-1-.3-42.5-11.3-44.5-12.1-88.8-24.5-88.7-25-44.3-12.7-44.2-12.8h0c-5.8-144.8,4.9-305,4.9-305,122,34.2,297.1,15.7,349,9.1h0l.5,94.7.3,98.3.2,196.6Zm385.2-69.8c-4.6,80.2-15.2,151.7-36.5,182.9-26.2,38.1-253.4,233.3-316,270.7h0l-.5-94.4-.3-98.3-.2-157.7v-.4l.9-.3h0l.9-.3,42.1-12.8,44.2-13.1,88.4-26,88.6-25.5,44.3-12.6,44.1-12.2Zm1.4-29.1-44.2,12.8-44.3,12.7-88.7,25-88.8,24.5-44.4,12.1-42.5,11.4-1,.3h0l-1,.3v-5.4l.2-196.6.3-98.3.5-94.7h0c51.9,6.6,227,25.1,349-9.1C883.2006,71.8,894.0006,232,888.1006,376.9Z'
              />
            </g>
            <motion.path
              variants={page === '/' ? treeVariants : altTreeVariants}
              initial='hidden'
              animate='visible'
              fill='#fafafa'
              id='tree'
              className='cls-3'
              d='M1044.5006,865.5c-6.3-2.1-15.8-12.6-36.9-23.1-22-11-47.4,6.3-63.2-10.5-5.8-6.2-13-8.5-26.1-13.2-19.2-6.8-50.5-1.7-71.9-14.2-12.6-7.4-32.7-3.2-52.7-8.4-32.6-8.6-72.1-5.7-75.9-9.5-6.3-6.3-16.9-8.4-29.5-15.8-10.2-5.9-42.2,1.1-60.1,1.1s-37.9-18.9-53.8-18.9-30.6,10.5-72.7,12.6c-20.2,1-33.5-2.3-45.3-8.3-33.7-44.4-53-38.5-84.2-41.3a145.3326,145.3326,0,0,1-24.4-4.2c-13.4-3.6-29.1-9.9-48.1-21.6-12.3-7.3-23.1-13-36.3-13.1v.2c-.1-.1-.2-.2-.3-.2h-.3c-4.3-29.6-27.8-52.9-31.2-83.4,23.9,3.1,50.7,5.1,76.7-.3,31.1,21.9,32.4-12.6,57.2,25.3,2.8,3.9,7.1,5,11.6,6.2-7.5-2.7-13.7-9-17.9-18.3,3.5,2,14.6,16.8,29.6,9.4-13.1,4.9-19.3-3.4-31.5-14.3,19.9-8.7-2.7,12.1,34.2,2.5-8.5-1.6-18.7,9.7-24.2-7.5,42.4-7.1,21.2,16.5,67.6,6.7-9.9-.6-22.3,6.4-32.6-4.5,17.7,2,40.2,1.9,56.7-5.5-11.1,4.2-27,4.8-41.2,3.4,4,0,7.5-9.1,20.7-7.5-8.7-3.1-15.9,5.3-25.9,6.9h0c-6.8-.6-14.6-3-22.8-5.1,7.2-4.5,14.6-15.5,25.2-16.1-9.6-2.2-23.2,21.2-54.4,14.5,8.1-5.3,18.7-9.5,27.1-16.9-17.7,11-41.5,23.7-64.8,17.6,77.2-21.6,39.1-31.5,98.9-16,2.8,3.7,11.9,4.2,24,4.2-5.6-.5-14.3-.8-21.1-3.7,10.4,1,23.4-3,33.3-8.4-13.2,5.8-29.7,9.3-45.1,2a31.6859,31.6859,0,0,0,16.3-5.1c-11.4,5.7-28.9,2-38-1,14.1-7.4,28.9-14.9,43.8-23.9,21.7,16.4,32.5,3,59.1,5.3-20.3-7.7-26.4,11.5-55-7.8,5.7-3.3,13.4-7.6,21.2-10,13.3,6.9,13.4,9.6,20.2,9.6,4.8,0,12.8-1.3,30.7-3.4-15.4-1.6-29.8,7.3-45.5-7.6,14.6-.3,65.6-11.4,69.5,6.6,2.9,1.6,6.2.6,9.9,0-16.1,1.6-3.1-3-17.7-10.9a70.4716,70.4716,0,0,0,20.6-6.4c-9.8,4.1-20.8,5.1-32.1,5.1h-2.8c-7.2-.2-14.4-.7-21.7-1.2,6.1-.4,8.8-5.5,12.5-10.7-7.3,10-13,10.7-29.9,10.4,8.2-7.4,18.6-22.2,28.7-29.1a130.0944,130.0944,0,0,0-25.1,22.1c.8-4.8-11.2-10.3-5-17-6.2,5,2.2,9.3,3.6,17.5-10.6,5.6-23.6-.6-36.4,3.1,9.3-7.2,17.9-19.7,27.4-28.5-10.3,8.7-21.4,20.4-33.4,30.1-.5-5.5,3-13.7-1.4-19.7,9.3,32-28.6,48.8-54.6,58.1,27.8-57.8,24.8-4.8,53.9-49.1-9.2,6.6-9.5,21.2-26.7,16,33.1-27.1,6.1-28.4,28.9-43.5-3.1,1.6-7,2.9-9.9,6.7.8-2.4-.8-5.8-1.6-9.4,3.8,17.6-5.7,36.5-24.3,45.2,6.3-6.1,9.9-26.8,6.6-41.4,2,14.6-1.6,33.6-14,45.5-.7.9-.8-1-5.7,4-2.9-6.5-22-12.8-11.2-22.8-10.7,7.8,3.8,15.3,9.9,25.2l.2-.2c0,.1-.1.3-.1.4,0-.1,0-.1-.1-.2-5.4,6.4-11.3,19.5-15.7,27.6a271.9354,271.9354,0,0,1-46.9,14.2c3.3-6.1,2-14.4,1.9-23.2,7.9-.5,19.2-7.3,24.5-15.6-4.9,6.2-14.6,12.7-24.3,13.8,6.5-13.1,21.5-23.8,37.2-27.7a94.2886,94.2886,0,0,0-11.1,2c5.7-4.8,11.2-9.5,18.3-15.3,7.7-2.3,19.7-7.2,29.4-9-7.6,0-13.9,3.8-25,5.3,5.5-4,10.9-11.8,18.9-14.3-9.3,2.7-18.1,12.4-28.2,18.6-3.8,2.6-8.5,6.1-13.8,9.8,2.5-6.3,10.8-12.3,12.1-20.9-2.8,7.4-19.6,28.1-28.1,32.2,3-5.1,9.5-11.5,10.8-19.2-3.7,11.7-16,21.5-25.1,31.6-3.9-9.3,3.3-22.7-2.1-32.9,3.3,7.2-1.9,18.2-1.1,27.7-.2,6.9,4.1,29.6-7.1,39.1-25.3,4.6-51-1.5-76.7-1.3a184.3291,184.3291,0,0,1,6.6-31.8c3.7-.1,14.1.3,22.1-.8,6.2,1.8,3.1,10,22.6,2.7-4.9-1.2-10.4,7.8-19.9-3.1a43.44,43.44,0,0,0,12.8-4.5c3.5.2,13.4-.2,19.5-1.7a86.8188,86.8188,0,0,1-17.2.4c6.2-6.2,14.2-4.7,22.7-5.7-3.1-.6-6.8-2.2-13.1-.5,5.4-3.7,10.8-9.9,15-15.5-5,5.4-11.1,12-19.9,16.4.3-4.6-5.6-11.2-.6-16.8-4.5,4.3-1.1,10.6-.6,17.5a78.2156,78.2156,0,0,1-11.3,5.1c4.2-5.4,2.4-7.2,0-10.2,1.5,2.3,2.1,5.3-1.6,10.7-7.1,2.2-21.5,1.4-28.8.9,8.3-29.9,65.6-47.3,92.3-58.1,20,2.8,41.2-6.9,62-12.8,8.6-1.5,16.7,7,26.5,8.2-10.4-3.2-19.5-13.4-32.9-10,9.6-14.1,37.4-3.2,61.1,7.8,2.5-.5,11.8,8.1,15.2,3.3-2.1,2.8-6.4-.6-10.5-2.7,3.4-1,6.7-4,9.4-7.7-12.6,16.3-21.2-5.8-55.1-11.8,2.3-2.6,3.4-5.2,7.1-9.9,31.8-.5,38.9-22.1,69.1,6.4,2,6.5-1.4,18.6,4.8,25.2-3.4-4.3-1.7-12-2.7-23.1,3.5,4.5,10.6,8.7,11.6,16.7-2.1,7.6-7.6,16.6-21.5,19.3,6.2-.8,17.7-4.1,22.4-15.7,4.7,10.5-12.2,10.9-14.8,23.4,2.6-6.3,2.6-6.3,15.8-14.5,4.8,15.9,15,12.4,29.4,15.4-16.8-6.6-25.4,4.9-28.2-30.1a30.6852,30.6852,0,0,0,8.7,3.8c5.2,5.8,13.1,7.7,21.2,9.3s16.6,3,23.1,7.9c-8.9-9-26.2-7.5-37.7-16,18.2,2.2,36.1-4.1,54.2-6.7-24.2.9-61.5,14.6-76.7-15.1,8,2.9,20.3,5.3,28.7-1.7-19.8,10.8-33.9-4.6-50.9-17.6,35.5-10.8,50,4.4,82.3,13.5,12.9,9,1.8,8.3,23.2,14.9-9.2-6.1-6.5,2-21.1-16.1,9.3-.9,16.4,5.2,27.9,6.3,3.8,2.9,4.7,3.4,11.6,7.1,2.5,11.3-6.7,6.8,6.7,22.8,7,15.3,8.4,8.7,26.2,12.1-22-6.4-11.6,6.8-30.5-22.4.4-2.3.7-2.7,1.4-5.7,2.3,15.4,39.8,20.8,55.5,13.2-8.8,3.9-42.1,2.5-50.3-11.3-2-5.9.4-10.1-10.3-15.7h-.4l-.6-.3c2.2-.2,5.7-.8,10-1.4,15.7-5.1,27,14.5,46.6,7-11.6,3.4-24.7-6.1-36-10.9,19.4-15.8,38.7-5.6,58.2-9.7-4.4.2-9.7-.8-15-1.1-38.4-9-36.4,13-74,8.8,63.2-9,70.9-30.4,100.5-47.7-17.2,7.7-33.1,23.8-53.5,30-5.5-23.8-10.5-13,24.2-46.5-5.3,4.8-14.2,11.4-22,18.1,3.1-4,9.1-8.3,11.8-14.8-2.7,5.8-11.6,10.5-14.7,17.1-2.3,2-6.1,4.5-6.9,9.6-6.2-5.2-4-9.6-.6-17.3-3.3,4.4-9.1,9.5.6,19.9,13.6,25.5-26.3,20.2-43.7,23.5,10.4-7.7,15.6-25.8,30.1-31.1-25.6,8.7-21.6,42.1-61.4,27.6,9.9-3.6,2.5-14,14.2-20.1-9.6,1.6-4.6,13.8-16.5,19.2-8.9-3.4-17.8-8.7-28.2-12.9,9.4-5.3,22.1-8.1,32.6-14.6-10.9,5.1-23.6,8.3-37.1,13-9.2-3.1-21.9-4.2-34.1-2.3-.2-1.6,22-19.7,32.3-16.3,2.1.3,3.5,1.7,6.2-.7-4,2.1-10.2-6.2-33.8,8.7,2.8-9.8,11.6-16.8,22.6-20.6,9-4,20.6,1.4,31.5-3-5.9,2.2-14.8.4-22.8-.7,8.9-4,19.4-7.7,29.3-8.4-12-.2-25.9,4.6-39.3,9.3,2.9-8.3,13.3-11.5,20.4-18.2-3.2,2.5-8.2,4.4-12.3,7.1,1.6-3.6,2.1-2.4,4.2-10.1,2.7.7,6,1.7,9.6.7-2.5.4-4.7.3-9.3-1.4a8.154,8.154,0,0,1,3.3-3c-1.4.7-1.6.5-3.6,2.9-8.1-5-20.3-5-31-2.4,4.1-1.3,10-5.5,17.5-5.9,7.5,2.7,18.4-.9,28,2.7.4,8.7,15.1,5,24.3,7.4-13.3-4.4-11.3,2.7-27.8-10.9,8.3-.6,17.1,2.4,27.2,1.1-5.2.3-12.2-1.7-19-2.5,3.2-1.1,11.4-1.6,21.6-5.6-17.3,5-35.3,3-55.8,3.6,6-3.4,14.6-6.2,23.1-7.7.8-.2,1.7-.3,2.8-.5h.4c2.9-.5,6.5-1,10.1-1.3,4.2,3,13.8,8.3,21.4,4.7a10.1444,10.1444,0,0,1-1.9,1.3c5.9-.1,14.9.3,22.3,3.8-9.7-6.4-26.8-3.8-38-10.2,15.2-1.3,29.7-1.7,44,1.5a107.63,107.63,0,0,0-22.6-4.2c9.4.5,9.7-11.4,19.2-15.7-12.5,3.7-2,14.2-33.4,15h-4.7c5.6-3.5,14.5-4.4,17.5-16.2-8.3,22.5-46.3,12.9-66,25.2.9-1.7,1.2-2.6,4.9-7.4,6.9-.6,16.8-2.8,26-5.5-5.6,1.1-15.6,3.1-24.3,3.6,5-4.9,14.8-6.5,22.1-9.8-6.7,2.9-15.4,2.4-23.2,8.4.7-2.2.6,0,2.5-6.2,20.1-4,42.7-8.5,62.5-17.6h0c2.6-.1,5.3-.4,8.2-.8,12.4-.9,16.4,6.2,22.6,13.4a.0979.0979,0,0,0-.1-.1c.2.2.4.3.6.5-.1-.1-.1,0-.2-.1,4.6,5.3,10.4,10.7,21.6,13.1-5.5-1.5-12.3-3.8-16.5-10.7,4.1,1.6,5.4,1.4,13.2.8-1-1.7-12.6,5.8-23.2-13,8.7,4,20.7,5.7,30.8,10.9-.9,1.4-4.2,3.4-6.3,5.6,2-2,2.5-1.2,7.1-5.5a23.2806,23.2806,0,0,0,4.5.2h0a23.1605,23.1605,0,0,1-4.2-.5c.6,0,.2-2.1,5.7-5.7-.6.7.2.5-1.5,6.2h.2c.8-1.9,1.7-4.4,3.4-8h.1c.3-.8,1,.4,3-4.5,1.3,2.4,2.6,7.9,9,6.7,5.6,1.9,6.2,10.2,13.6,11.3-7.3-1.8-3.7-5-11.7-11.5,3.5-.7,6.6,1.1,15.4,4.5-9.7-8.6-25.9,1.4-26-21.4,14.4,3.7,28.8,12.8,45.7,11.7-13.7.2-28.8-9-42.3-14.2,16.4,2.1,31.6,2.8,50.3,6.2,15.5,4.2,8.7,7.4,22.3,2.7-11.1,1.9-22.4-6.2-34.6-7.9a177.7168,177.7168,0,0,0,24-8c-13.9,4.4-31.6,9.7-48.5,4.7,20.3-2.6,25.4-.2,37.6-17.1-16,19.8-48.9,14-72.6,12.2a189.3776,189.3776,0,0,0,15.9-11.3,161.0884,161.0884,0,0,0,35.4-14.3c5.4-4.4,5.5-10.8,18.6-7.1-15.4-6-9.3,4.6-35.3,11.6,2.2-1.8,2.4-1.8,8.6-10.5,20.8-8.6,45.6.7,67.2-12-13,6.4-28.5,5-44.7,4.7,10.1-5.4,20.7-12.9,33.9-15.5-17.1,2.2-29.8,13.3-56.7,17.6l.9-.3a3.0913,3.0913,0,0,1-.8.2h0c-.2.1-.3.1-.4.2a.3491.3491,0,0,0-.2.1c-.1,0-.2.1-.3.1-.2.1-.4.1-.5.2h0c-.1,0-.1,0-.2.1-.1,0-.1,0-.2.1-.1,0-.1.1-.2.1s-.1.1-.2.1a6.3143,6.3143,0,0,0-.9.4c-.1,0-.1.1-.2.1v-.4h-.3c24.2-17.1,50.1-38.9,82.4-39.8,0,0-.6-.1-1.8-.2-8.6-.4-18.6,2.4-28.8,5.1,4.5-1.4,8.3-5.6,12.9-8.9-5.4,3.4-11.9,6.9-19.1,10.6-15.9,4.6-30.9,15.7-45.9,26.2,12.8-29.7,43.1-23.8,40.9-34.3-1.2,7.1-28.2,9.4-33.2,17.5,3.5-12.4.5-27.3,26.5-27.5-29.8.2-19.8,7.3-34.4,35.6,1.6-4.5-.1-10.3-4.4-15.4,8.5-12.2,18.5-28.2,33.7-31.2-8.6-.7-27,14.8-34.5,26.7a11.6387,11.6387,0,0,1,1.6-5.1c-.6.8-1.5,1.7-2.2,5.8-3.3,4.2-8.9,8.1-14.1,12.1,10.8-35.9,15.3-71,52.6-81.6-28.2,5.6-40,26.1-49.9,51-1.7-11.5.3-29.5-.9-42.5-2.4,23.6,1.2,50-10.4,72.8-3.3-11-.9-23.5-2.7-36.4-1.6,22.4,5.2,48.4-15.1,66.9-3.5-14.1,4.8-22.4,5.8-35.8-1.4,8.1-8.9,9.6-10,40.3a107.0558,107.0558,0,0,1-22.7,17.1,30.5934,30.5934,0,0,0,3.1-15.3c12.3-15.5.2-43.4,11.4-60.7-9.8,7.8-4.9,43.2-12.4,53.9-7-23.2-6.8-52.5,10.6-72.5-20.3,21.4-21.5,48.1-16,76.6a14.6757,14.6757,0,0,1-1.5-3.4c-4.4-21.1-14.4-13.5-11-48.3-1.5,7.1-3.8,15-2.7,23.1-6.8-8.7-13.6-22.4-15.6-34.2.9,15.6,10.8,32.6,20.3,46.7a35.9508,35.9508,0,0,0-12.5-6.5,10.5183,10.5183,0,0,1,2.2-2.9c-.8.5-.8.2-2.5,2.8-2.4-.6-.3.3-7.1-1.6a92.188,92.188,0,0,0,8.6-8.9,95.9809,95.9809,0,0,1-9.6,8.5,16.3544,16.3544,0,0,1-2.7-1.1c3.3-14.6-1-31.6,6-47a78.4479,78.4479,0,0,0-7.1,35c-5.7-10.4-9.7-25.2-16.2-36.5,5.4,12.5,9.8,28.3,15.1,42.9-.2.9-.3,1.4-1,3.8-4.8-2.9-10.4-8.8-14.2-14.2,3.1,4.8,7,10.9,13.7,15.7a106.4511,106.4511,0,0,1-3.9,10.2c-.1-3.3-1.4-5.9-2.8-9.3,2.2,8.7.7,17.7-5.3,27.1.5-7.9-2.8-17.2-9.4-24.2h0c14.4,16.4,5.8,45.6-9.2,61-11.1,1.4-22.6,2.8-35.3,5.6a48.607,48.607,0,0,0,5.7-17.6c7.7-13.4,27.6-14.6,36.3-29.1-7.2,11.8-25.5,11.8-35.9,23.6,0-.8,0-.2.1-1.9a201.6982,201.6982,0,0,0,13.2-21.7c5.1-3.7,13.4-9.5,20.8-13.3-5.3,2.6-13.5,5.7-19.4,10.5,3.3-7.9,16.1-13,23.6-17.2h0c-25.1,9.7-21.5,11.2-38.2,34.9-10.4-56.9,11.9-41.9,30.5-73.7-7,10.5-20.9,17.5-30.5,27.5,2.9-7.1,5.7-20.1,5.6-29.1,0,9.5-5.7,21.4-8,32a27.301,27.301,0,0,0-4.1,8.1c-1.9-9.2-8.8-19.6-10.2-30.2.5,9.9,7.7,24.6,8.9,36.1-1.2,9.9,1.5,20,.7,31.4-12.3-5.5-18.2-21.8-23.6-34.5,3,8.4,4.4,19.6,10.7,27.9-2.4-.9-24.7,2.5-25.2-4.9-3.4,5.8,25,7.4,26.9,6.5,3.1,2.7,7.6,5.6,10.8,10-.5,10.2-5.9,21.8-13.8,28.7-35.4,9.3-64.5,37.4-82.9,69.6-.5-6.8-1-13.3-4.5-22.2,7.2-9.2,11.6-21.3,14-34.9,10.8-13.1,28-17.9,44.3-24.7-7.9,2.6-17.6,3.9-25.3,6.6,7.5-7.2,16.2-11.3,20.8-20.6-9.8,11.8-25.7,21.4-38.9,33.2.4-2.7.7-5.6.9-8.5,13.8-31.8,20.5-38,26.4-39.7s10.9,1.1,21.2-12.7c-19.7,24.3-24.1-9.3-47.4,42.4-10.6-55.7,18.3-45.2,32.9-71.8-6.8,9.1-20.4,14-29.1,23.8,4.5-7.3,14.3-15.9,13.7-27.3-.1,12.9-19.5,26.2-24.5,43.8-3.7-8.2-10.2-18.5-4.5-29.4-6.6,9.9-.5,22.1,3.4,34.3-.5,4.2-.1,9.3.5,14.6a.7561.7561,0,0,0-.4.1,65.93,65.93,0,0,0-13.4-15.5c.9-5.4,1.3-13.1,5.4-18.2-3,3-5.7,10.7-6.7,17.2-2.3-2-6.6-3.8-8.1-8.9.9,3.4,3.2,6.3,7.9,9.9-1.3,6-4.1,13.8-12,15.9-.6-3.5-1.6-7.8-1.5-12.6a70.3537,70.3537,0,0,0,.6,13,66.663,66.663,0,0,0-9.9,4.8c.1-7.1,1.7-18,1.7-27.9-.1,7.6-3.9,18.9-3.2,28.9a25.1921,25.1921,0,0,0-7.4,8c-10.8-20.1-14.7-47.5,2.4-67.6,24.2,1.3,51.4-8.5,73.9-22,21-2,45.1-6.2,67.2-9.1-18.7,1.5-40.4,2-60.9,4.1a61.5256,61.5256,0,0,0,6.4-6.7c1.6-1.1,1.9-1.4,5.5-3.7,22.8-.5,46.4,3.5,66.4-12.7-15.7,12.5-38.8,8.8-58.5,8.7,21.4-7.6,47.8-14.3,63.6-34.2a87.5084,87.5084,0,0,1-39.4,22c4.1-3.4,10.8-13.4,18.3-15.2-6.9,1.4-15.2,9.3-21,16-7.9,2.3-17,3.8-25.9,7.2,11.6-25.6,36.3-21.8,53.8-38.9-9.1,8.2-29,12.2-39.6,17.6,10.5-15.7,29.1-28.4,47.3-36.3-6.9.4-24.8,12-36.8,18.9a59.574,59.574,0,0,0,10.3-27.1c-1.4,11.3-10.5,24.4-18.1,34.2-.1-.1-.1,0-.2-.1,2.6-5.7,3.6-13.9,5-21.6,27.8-32.4,24.6-15.9,42.1-26.7-6.1,2.5-14.2,2.7-20.7,3.9,9.8-9.2,19.1-22.3,25.9-34.4-8.4,13.1-20.1,25.6-33.5,37,3.9-13.5,8.8-12.6,6.8-28.9.2,10.4-7.1,21.1-9.3,31.4l.1-.1v-.2h0a.0979.0979,0,0,1,.1-.1c0-.1,0-.1.1-.2v-.1h0l.1-.1h0l.3-.3c.1-.1.1-.1.2-.1l.2-.2h0c.2-.1.3-.3.5-.4l.1-.1h0l.1-.1.3-.3-.3.3-.2.2-.1.1-.1.1-.2.2-.5.5-.7.7-.4.4a131.947,131.947,0,0,1-11.3,10.7c2.9-13.1-5.4-30.1,2.5-43.7a10.5114,10.5114,0,0,1-.9.8c.1-.3.7-1.6,1.8-4-3.7,6.8-13.4,14-18,27.4-.4-26.3,5.5-50.5,27.6-69.3-9.9,7.9-21,18.5-25.9,32.4-2.3-13.1-10-28.4-18.2-39.2,9.5,15.4,19.2,37.2,12.9,57.8-4.8-14.5-17.7-28.2-26.8-41.7,12.9,22.4,27.2,35.3,24.5,66.8-5.1-17-31.1-13.4-37.5-30.5,2.8,17.6,29.6,10.7,37.7,40.4-.4,19.4-18,31.7-34.1,41.6-.6-28.1-14.3-27.1,3.4-51.4-3.5,3.4-7.5,6.9-10.3,11.2-.6-8.6-.6-28-1-35-.2,5.4-1.1,19.1-1.5,28.1-2.1-3.6-1.5-11.1-5-15.7,5.1,12,4.1,30.7,7.9,45.4a62.8125,62.8125,0,0,0-5.3-6c-.4-12.8-13.6-33.4-10.4-57.4-3.6,16.5,1.7,35.6,6.2,53.3-5-4.7-12.4-11.6-17.7-18.2.4-.4,0,0,1.7-1.9-.1.1-.4.3-1.8,1.7-14.6-20.6-12-32.7,9.2-47-5.5,3.3-12.2,6.9-16.7,12a63.4826,63.4826,0,0,1,11.4-22.6c-8.8,9.6-17.8,25.7-15.5,41.7-7-5.5-16.3-16.4-20-26.5,4.6,16.6,20.7,28.4,28.2,46.2-1.4,1.8-2.9,3.9-4.4,6.2-.5-.3-.9-.5-1.4-.8.1-4.3-4.7-8.5-6.1-15.9-.2,3.7,3.8,9.4,5,15.2-7.4-5.8-13.8-1.9-18.4-16.4.5,5.8-1.4,8.4,19.5,20.1-.8,1.3-1.5,2.6-2.2,3.8a102.36,102.36,0,0,1-15.3-6.6,105.7517,105.7517,0,0,0,14.7,7.7c-1.5,2.6-5.2,8.9-6.2,11.8-6.5-17.1-22.2-30.7-27.7-48.7,3.4,17,18.8,33.4,24.3,52-8.8-6.3-13.6-19.2-22.9-27.1,16.2,28.3,35.8,28.6,18,65.8a45.9324,45.9324,0,0,1-6.3-10.8,30.0921,30.0921,0,0,0-1.4-8.7c1.9-.2,5.6-.3,8.1-.4-2,0-3.7-.2-8.3-.2-1.9-6.9-4.2-15.4-7.4-22.3,1.9,5.1,4.2,14.6,5.6,22.4a53.165,53.165,0,0,0-12.4,2.1c-.2-.3-.7-1-2.7-3.8,3.3-4.8,7.9-11.9,4.5-19.4,2,5,0,11.9-5.4,18-1-3.4-1.7-9.6-3.3-17.1.5,4,.6,9.6,2.3,18.2-3.2,3.8-8.4,7.4-13.9,11.3,4.8-5,10.1-14.5,11-22.8-1.2,9.5-10,17.8-15.6,26.6h0a38.4912,38.4912,0,0,0-6.8,8.7c-1.5-10.9-1.5-28.9,8.5-38.1-14,10.5-10.1,31.6-12.5,48-13.1-32.6-2.3-65.3,13.8-90.7-5.4,8-12,17.5-17.1,29,4.6-18.3,0-42.7-7.6-59.7,12.6,36.4,3.5,51.7-1.2,81-3.2-9.6-8.5-23-12.1-33.3,2-3.7,5.6-8.2,7.9-14.5-1.4,3.4-4.9,8.4-8.4,13.1-.3-1-.6-1.6-.6-1.7,0,.1.2.8.5,1.9-2,3-4.9,7.2-5.7,12.9-2.4-6.6-8.7-15-11.7-22.9,4,11.1,12.9,25.4,11.2,38.8-11-14.6-26.4-27.3-27.9-47.1-.5,16.2,11.7,32.1,22.2,46.2-29-9.9-16.8-9.2-29.7-23,7.4,9.1.1,15.2,32.4,28.3,0-.1.1-.2.1-.3a.3676.3676,0,0,1-.1.3c5.9,6.5,7.6,16.2,9.8,26.3-1.8-2-5-5.3-8.4-8.9-1.1-4.1-3.7-10.4-1.4-17.5h0c-1.2,3.9-2.6,10.1-.2,15.8-8.1-7.6-16.7-19.5-24-28.2,7.6,11.3,18.4,26.8,28.6,38-23.2.4-16.3-4.1-26.9-8.7,4.4,3.6,7.4,11.4,29.2,11.5C268.1,206,274,225.3,288.4,240c-1.6-.2-5,0-8.9-1-4.1-4.2-10.2-9.4-12.6-17,1.1,5.2,5,10.8,9.7,16.1a50.812,50.812,0,0,1-10.7-5.4c-1.1-2.5-5.5-5.7-9.7-8.8.1-.7.2-1.1.2-1.3a6.5631,6.5631,0,0,1-.3,1.3,9.077,9.077,0,0,1-2.2-2.7,24.9235,24.9235,0,0,0,2.5-5.2,23.9477,23.9477,0,0,1-2.7,4.8c-1.2-1.9-.8-6.8-3.7-10.5,1.6,2.3,1.2,4.2,3.1,11.5-.4.6-.9,1.3-1.3,2-2.2-1.3-4.4-2.6-6.5-3.7.4-7.7,3.4-17.3,2.7-26.5.2,7-2.9,15.9-4.6,25.5-5.9-2.7-12.6-7.1-18.5-10.8,4.6,3.2,10.1,7.9,17.2,11.9-4.7.3-9.1-4-15.7-3.9,4.7.1,10.5,5.1,16.5,5.2-.3,1.7-.6,3.4-1,5.1-4.6-.3-7.4.6-14.7-4.5a18.5109,18.5109,0,0,0,14.4,5.9,218.8909,218.8909,0,0,1-6.9,24.2c-3.6-8.1-17.7-29.8-16.3-41.4-2.8,20.8,22.9,41.7,8.2,63.8-.7-2.7-7.5-9.1-6-17.2-1.9,2.8,1,10.7,5.4,19.2-3.8,9.2-4.9,22.6-2.7,33.4-5.9-4.5-12.5-9.4-19.8-15.3h0c.4-1.4-6.7-4.9,2.4-15.1,2-.3,2.8-.6,3.8-1.9,1.1-1.3,2.5-3.5,6-7.4-2.1.3-1.5,3.9-8.9,8.2,6.3-7.4,13.2-17.2,1-27.1,6.4,5.1,8.3,15.1-.2,22.8.5-4.7-6.1-6.9-8.7-11.6,1.1,4.2,8.9,6.1,7.5,12.9-.4,1.3-8.8,6.1-8.2,14.9q-1.95-1.65-3.9-3.3c-7.4-28.8-21.5-38.7-.7-64.2-6.8,7-15.3,14.4-13.1,26.6a117.0416,117.0416,0,0,1-4.6-31.4c4.1-2.7,9.1-9.6,9.6-16.8-1,4.4-3.4,11.3-9.5,15,.5-15.1,10.5-34.5,4.1-50.3,5.6,24.6-15,44.8-6.8,79.8-3.9-7.4-13-19.6-18.2-27,10.2,15.6,21.9,37.2,27.3,56.6-40.2-35.8-56.3-74.5-40.3-126-4.6,11.5-6.6,26.6-10.3,40.5C126,175,113.6,151.2,107.5,139c9.5,22.5,21.4,52,27.4,78.7-9.2-9.6-22.9-21.1-34.1-29.4a319.7251,319.7251,0,0,1,27.3,26.6c-9.3-3.6-14.4-4.2-25.5-12,8.8,9.3,26.5,11,34.8,22.9,3.9,11.6,7.6,23.7,16.2,34.9-11.2-6.4-20.7-20.6-29.6-30.1,30.7,44.8,24.6,21,59.1,64a122.2811,122.2811,0,0,1-18.2-2.7c-11.2-13.5-27.6-26.5-42.8-37.9,10.3,11.6,26.4,19.7,34.9,35.8-22.6-6.1-44.5-23.4-49.4-48.6-.4,9.5,6.7,20.2,12.7,28.9-12.9-8.9-20.8-26.7-30.6-38.7,10.9,18.5,22.2,41.8,43.6,53.8-12.6,4.5-27.9-2.5-39.1-10.8,5.1,4.6,13.3,9.6,21.4,13.4-3.5.5-9,2.2-13.9,1.8,14.7,1.8,32.9-5.7,47.2,4.5-12.3.3-25.2,11.3-39,7.2,19.2,5.9,31.4-10.6,58.1-.6-12.4,7.7-15.3,9.8-31.1,6.6,12,4.8,23.1,1.3,35.3-5.6a77.902,77.902,0,0,0,19.8,1.9c7.6,7.4,18.7,16.1,27.2,24.9-1.5.3-2.2.4-5.8,1.2-3.8-2.2-6-2-14.7-7.5,2.3,1.5,8.3,5.9,13,7.8-2.5.2-4.6.2-8.9.6-6-1.2-15-2.8-18.6-11,1.4,4.7,7.3,9.6,13.4,11.2-6.2.1-14-.1-20.1-4.8,6,5.3,16,6.8,26.3,6.6-3.4,4-11.4.4-17.8,1.1,6.3-.5,12.7,5.2,20.8-1.1,4.1.4,9.9-.6,15.1-1,5.9,7.7,10.5,17.7,14.9,28.1-1.8-1.3-6.1-1.5-8.6-3.2,1.9,1.7,5.6,1.8,9.1,4.3a119.7605,119.7605,0,0,1,6.6,20.2c-5.3-1.5-11.8-1.7-20.1-3.5a49.1206,49.1206,0,0,0-8.7-13.1c-.2-5.2-6.6-12.9-5.2-20.1-1.8,4.8,2.1,12,3.4,18.4-8.2-6.4-20.5-16.2-30.4-20.7,7.4,3.9,15.3,11,23.3,18-4.9-1.1-12.1,0-18.8-2.7,4.8,2.7,14.2,3,20.9,4.5,3.9,3.1,8,8.8,11,14.4-10.8-3.8-25.1-7.2-37.3-11.8-1.1-2.5-8.1-11.1-9.7-13.7,1.9,3.8,3.9,5.7,7.9,13.1-1.3-.5-1.7-.7-5.7-2.4-2.5-11.2-16.8-20.5-19-34,.4,10.6,12.1,22.3,16,32.5-17.6-8.4-28-25.5-41.6-39.4,10.2,11.8,19.6,29.6,34.4,39.9-14.1.1-27.5-8.5-42-12.7,42.6,22.1,28.6,8.1,61.2,23.2l.9,2.1c-15.3,1.3-35.7-8.1-47.7-16.2,11,8.6,30.5,20.1,46.8,20a.0979.0979,0,0,0,.1-.1l-.1.1c1.1.1,2,.2,2.9.3,9.7,14.7,20.2,32.4,4.7,48.6-8.3-5.7-6.7-16.4-5.9-27,.3-5.6-6-15.3-1.7-21.8h.4s2.9,20.4-2.2,34.8c-3.8-5.9-12.3-12.7-17.5-19.8,4.2,6.6,12.2,14.9,17.8,23.2.9,4.2,3.2,9.3,8.1,12.3-3.3,6.6-1.5,17.8,3,25.1-6.3.8-9.7-1-18.3-12-2.8-5.7-1.1-12.5-2.6-19.7.4,4.9-1.9,11.1.4,16.6-3.4-4.9-7.1-11.8-12.6-16.3,6,5.7,9.6,16.1,16.2,24.7-2.9-.9-7.5-1.2-14-3.5.1-.5.5-1.1,1.4-4.2a39.6231,39.6231,0,0,1-1.7,4.1,14.6921,14.6921,0,0,1-2.4-1.2,12.321,12.321,0,0,0,2.3,1.4,51.8447,51.8447,0,0,0-2.9,7.3c-10.7-14.6-2.6-27.6-3-45.3,0,6.6-2.6,15.6-4.3,23.8-1.7-10.1-2.1-26.7-14.1-31.9,10.9,5.7,10.7,22,11.5,34.5-1.5-2.3-9.4-12.4-11.5-14.7,1.6,2,10.7,15.6,11.8,17.9h0c.2,6.9,7.7,23.1,10.8,27-15.6-10.4-21.7-33-31.9-49.7.9-15.7-11.2-14.2-6.9-34.8-3,8.6-5.3,6.1,3.9,30.3-4.5-6.3-8.2-9.9-16.2-16.2-2.1-3.9-8.2-13.2-8-20.8-.6,4.2,2.2,13.3,5.1,18.5-12.9-9-22.3-20.7-32.7-32.9,8.7,12.1,18.2,25.9,31.6,36.8-13.5-2.3-24.7,12.2-38.7-3.8,12.2,16.4,21.1,4.4,42.3,7.2,8.7,7.3,16.1,20.3,20.6,32.8a92.93,92.93,0,0,0-14.4-4.7c-5.2-4.9-11.8-15.3-20.5-18.6,6.7,3,11.8,11.3,17.4,18-9.8-1-21.2-6.5-32-11.3,5.5,3.6,11.6,5.8,19.6,9.9-13.7.4-32.4.2-45.3-3.3,21.5,7.7,53.8,4.1,75.4,15.5-14.6,4.4-29.6,10.2-44.9,2.8,12.9,7.9,33.4,5,47.7-.7,5.7,14.5,13.3,30.5,29.6,38.5-8.9,2.5-18.3-4.3-28.8-6,9.4,1.8,20,11.6,32.1,7.6,8.1,3.7,18.2,5.1,26.3,10.2-7.9,5.7-10.9,10-25.3,8.5-4.5-5.5-13.8-8.9-19.2-14.1,3.1,4.9,11.3,6.9,16,13.5a86.7659,86.7659,0,0,1-10.4-3.1c-8.4-7.9-18.4-21.9-30.2-29.2,5.9,4.8,14.4,16.1,24.3,27.2a108.6284,108.6284,0,0,0-15.5-3.9c-2.9-5.2-9-9.3-16-13.2-.9-7-15.8-18.2-6.5-26.3-5.9,4.8-5.2,6.1,3.8,24.8-15.4-7.1-31.1-17.1-37.9-35,7.4,19.4,14.2,25.6,34.9,37.8-5.9-1.3-12.8,3.4-20.4,3-2.9-3.9-2.4-15.5-9.1-17.4,4,1.5,5.2,9.2,6.8,16.1a5.8439,5.8439,0,0,1-1.2-1.5c0,.2.1.6,1.3,1.8a9.2456,9.2456,0,0,0,4.8,5.7c-3.9,1.1-6.9,4.7-11.9,8-4.2-3.4-22.3-11.2-33.2-15.4,9.3,4.9,19.7,9,30.4,16.8a56.498,56.498,0,0,1-22.4,4.2c6.9.4,15.2.4,24.1-3,2.8,1.9,6.7,4.8,11.1,5.9-3.1,13.1-52.4-4.8-59.2-9.6,11,8.5,36.6,15.4,51.8,19.9-12.1,12-24.2,15.1-41.7,19.2,17.5-2.2,38.8-7.3,51.1-24.3a5.9344,5.9344,0,0,0-.8.8c.7-.9,1.4-1.7,1.9-2.3-2.8,17.8-24.3,27.7-43,35.4,18.6-6,45.6-14.6,49-41.1,8.3-8.9,30.5-3.3,42.6,1.3-4.6,2.8-11.7,9.7-18.5,14.1-2.9-3.1-7.6-6.3-10.8-8.5,2.2,2,6.3,4.9,9.9,9.1-7.8,4.7-19.6,6.7-28.3,12.8,8.2-5.1,19.4-5.8,29.9-10.9a45.9505,45.9505,0,0,0,11.8,10.4c-8.2,8.1-21.1,13.2-30.7,21.6,6.2-4.5,18.6-8.6,33.6-19.7,6.3,4.2,12.1,9.1,21.1,12.7-12.4.4-28.5,9.1-41.7.4,13.8,11.8,35.7-2,51.7,4.7-4.5,2.8-15.2,7.2-22.9,6.4,8,1,14.1-.6,25.1-5.1A52.8387,52.8387,0,0,1,184.9,556c-5.6,24.8-6.3,52.3,4.5,76.6.7,12.6,6.5,29.8,11.7,42.2-167.4,84.1-104.3,81-146.2,99.1h1.3c-13.2,6.9-25,11.7-32.2,18.5C7.9,807.8,0,808.3,0,808.3V896H1054.0006V867.6A41.0118,41.0118,0,0,1,1044.5006,865.5Zm-690.9-264.6a1.38,1.38,0,0,1,.4.3A1.38,1.38,0,0,1,353.6006,600.9Zm7.5-4.6c1.4,0,2.8-.1,4.2-.1-2.6,1.1-5.1,1.5-9.4,3a17.2215,17.2215,0,0,0-3.9-2.3C354.8006,596.6,357.9006,596.4,361.1006,596.3Zm68.7-70.6a86.6459,86.6459,0,0,1,6.2-8.5h0c11-5.2,27.2.1,39.6-6.7a6.7344,6.7344,0,0,1-.1,1,55.2232,55.2232,0,0,1-7,5.7c-14.5.7-28.9,7.6-43.1,15C426.7006,530.4,428.1006,528.1,429.8006,525.7Zm64-77.4c-.4-.2-.9-.3-1.3-.5-.2-.3-.5-.6-.7-.9C492.4006,447.3,493.1006,447.8,493.8006,448.3Zm163.3-191.2c.5-.3,1-.5,2.9-1.4-4.3,5.6-10.8,12.5-19.7,14.1,2.5-2.3,6-5.5,9.5-9.1l.3-.3h0c.1,0,.1,0,.1-.1h.4c.1,0,.1-.1.2-.1C652.4006,259.4,652.5006,259.5,657.1006,257.1Zm-6-36c4.2,6.8,5.4,8.6,1.4,19.8h0c-5.8,7.1-8,15.9-17.2,21.5a5.4956,5.4956,0,0,1-.9.7l-.2.2a2.1859,2.1859,0,0,1-.5.3c-.7.5-1.6,1.2-3.3,2.5h0a142.051,142.051,0,0,1-27,15.7C637.4006,249.5,620.2006,246.6,651.1006,221.1Zm-23.9,72.6c1.1.4,2.1,1,5.7,2.4,0,2.5.1,4.3,1.4,9.3-2.1,5.9-5.2,4.8-10.7,13.4-8.7-5.4-21.1-8.4-31.1-13.7,11.3,5.1,21.8-4.9,34.1-1.5-9.8-6-9.4,5.5-40-2.3C598.5006,296.1,612.0006,291.6,627.2006,293.7Zm-81.9-55.2c.4.3,0,0,1.4.7l-2.1,1.8C544.8006,240.2,545.1006,239.4,545.3006,238.5Zm-6.1,18.1c1.1-2.9,3-7.7,4.5-12.5,1-1.1,1.9-2.1,4.2-4.3a43.1673,43.1673,0,0,0,7.7,2.4c-1.7,5.6-4.3,12.8-10.8,17.4,3.4-3.6,5.4-10.3,6.6-16.3a41.7973,41.7973,0,0,1-16.1,23.9C536.4006,263.7,537.8006,260.2,539.2006,256.6Zm11.8-.8c1.4.7,3.2-5,12.1-6.6-2.8.2-8.5,1.9-11.5,5.8,2-3,3.4-7.7,4.5-12.6,5.6,1.6,10.7,6.4,15.9,10.8-.3,8.1,11.3,16.6,4.1,25.1-9.4,16.1-36,17.3-52.1,21.1C536.8006,270.9,526.4006,279.4,551.0006,255.8Zm-189.9-142.6a18.6465,18.6465,0,0,1,1,2A12.445,12.445,0,0,1,361.1006,113.2Zm80.7,11c-2.5-12.2,3.9-26.3,13.7-36.5-6.2,12.8-.1,29.8-5.3,45.1-2.9,2.1-6,4.2-9.8,6.7A45.0817,45.0817,0,0,0,441.8006,124.2Zm-4.3,18h0a.3491.3491,0,0,1,.1-.2h0c0-.1.1-.1.1-.2v-.1c0-.1.1-.2.1-.3a.3491.3491,0,0,1,.1-.2h0a2.092,2.092,0,0,1,.4-.6c.1-.1.1-.2.2-.2a1.7561,1.7561,0,0,1,.4-.5c.1-.1.1-.2.2-.2h0a2.6513,2.6513,0,0,1,.6-.5,9.1669,9.1669,0,0,0-1.8,2.6c0,.1-.1.1-.1.2s-.1.2-.1.3c0-.2.1-.2-.2-.1Zm-37.8,41.3c12.3-9.3,27.1-18.4,36.2-33.1a5.7526,5.7526,0,0,0,.4-.7v-.1h0c0-.1.1-.1.1-.2a.0979.0979,0,0,1,.1-.1c0-.1.1-.1.1-.2.1-.1.1-.3.3-.4h0c.1-.1.1-.2.2-.3s.1-.2.2-.3c0,.3,0,.2-.1,1.6,3.3-2.1,6-4,10-7l.1-.1c.3-.2.5-.4.8-.6.2-.2.5-.4.7-.6.7-.6,1.5-1.2,2.3-1.8q1.5-1.2,3.3-2.7c-1.9,7.6-4.4,18.3-9.7,27.3-5,5.9-10.6,13.5-16.2,20.6,1.7-11.3,6.9-22.3,8.7-35-.3.2-.7.4-1,.6-6.5,17.3-9.6,41.2-27,53.4a69.502,69.502,0,0,1-8.1,4.3c-4.9.9-7.1,1.5-11.6,4.5-10.5,4.1-27.9,8.4-39.7,9.3C364.7006,208.1,382.5006,196.4,399.7006,183.5Zm-36-57a165.5776,165.5776,0,0,0,12.1,14.6c-4.2-2.1-9.7-5-15.8-8.4A67.73,67.73,0,0,1,363.7006,126.5Zm-5,8.6c3.2,2.1,6.4,4.2,9.4,6a91.682,91.682,0,0,1-11.2-2.4Zm-7.7,16.4c.9-2.4,2.9-6.9,5.3-11.6a84.8633,84.8633,0,0,0,17.2,4.4h0c.6.4,1.2.7,1.8,1.1-3.7,8.2-13.3,17.3-21.9,23.1a49.5287,49.5287,0,0,0-3.5-14.2C350.2006,153.5,350.6006,152.6,351.0006,151.5Zm-4.4,46.5c.7-9.8,7.5-13,11.9-23.6a38.2525,38.2525,0,0,1-8.6,11.5c.9-2.6,3.5-8.7,3.5-14.2,7.2-5.5,18.4-15.8,22.1-26.2,44.2,24.8-12,41.6-30.3,57.4C345.7006,201.4,346.1006,199.7,346.6006,198Zm-76.1-1c-4.7-10.3-6.2-23.7-13.8-34.5.5-8.9-3-20.1,3.7-31,8.6,22.4,11,48.3,14.8,73.2A51.1848,51.1848,0,0,1,270.5006,197Zm-88.6,59.7a8.1779,8.1779,0,0,0-.1-1.4A2.35,2.35,0,0,1,181.9006,256.7Zm4,159a5.91,5.91,0,0,1,.4.8A2.9915,2.9915,0,0,1,185.9006,415.7Zm-86.2,70.9c-.4.3-2.7,1.3-7.3,7a33.9861,33.9861,0,0,1-10.4-4.3c5.8-3.1,10-10.4,18.6-3.2Zm5.7-2.5-1.5.5c-.9-.5-.1.1-3.7-2.4,2.1.3,4.5.8,7.3,1.4A15.9848,15.9848,0,0,0,105.4006,484.1Zm19-1a74.2176,74.2176,0,0,0-9.7-.4c-5.4-4.5-17.9-.3-25.2-7,8.5,1.9,17.9-9.4,35.2,7.4Zm137,235a106.3455,106.3455,0,0,0,17,8.1c-4.2.7-8,1.3-11.5,1.9-2.3-2.5-4.5-5.1-6.7-7.6A16.8032,16.8032,0,0,0,261.4006,718.1Zm49-323.2c6.4,20.3,25.6,13.3,9.6,46.5-1.1.4-3.6,1.5-6.8,2.5-9.5-6.3-19.3-13.4-28.6-23.1a25.9913,25.9913,0,0,0,2.8-20.5c10-3.2,18.5-13.8,31.5-14.8,4.2,7.7,13.6,16,9.4,33.3-1.6-10.6-17-14-17.9-25.9A6.1115,6.1115,0,0,0,310.4006,394.9Zm9.6-9.4a51.6885,51.6885,0,0,1,5.4-.3,45.7715,45.7715,0,0,1,3.4,12.8C326.5006,394.8,327.3006,396.1,320.0006,385.5Zm17.9,46.9a98.432,98.432,0,0,1-9.4,5.2.3674.3674,0,0,0,.1-.3c2.6-7.6,2.8-19.6,8.7-27a53.9047,53.9047,0,0,0-5.1,6.1v-1.2c4.2-5.3,7.5-12.3,13.9-18.8C343.8006,407.9,342.7006,420.5,337.9006,432.4Zm73.4,12.9c-2.3,2.7-1.3,2.3-5.5,6.4-5.8-.1-12.6-2.1-19,2.5a78.0513,78.0513,0,0,1,8.4-9.8c4.9-.4,9.6-.9,18.6-2.1C413.0006,443.2,412.1006,444.2,411.3006,445.3Zm74.6-87.8c9.5-2.4,19.2-5.1,30.1,0-2.1,7.2-9.4,15.4-16.8,23.2-5.1,2.2-11.9,4.6-16.3,10.6,3.2-13,11-10.4,12.2-30.4,1.5.4,3,1.7,5.3,3.6-4.4-6.2-14.2-4.6-23.1-5C480.0006,358.9,482.9006,358.2,485.9006,357.5Zm-2.7-2.7,2.1-.3C484.5006,354.7,485.4006,354.4,483.2006,354.8Zm19.7-31.9a5.6234,5.6234,0,0,1-.7,1.8c0,.5-1.5,1.5-2.6,5.4-3.9,2.5-5.8,13.8-24.7,19-9.9,3.2-28,2.6-37.4,1.5C455.2006,335.2,479.1006,327.9,502.9006,322.9Zm-75.1,37.4c20.7,3.2,44.1.2,67.3.6-.5,9.4-6.8,16.9-13.2,26.1-.1-5.6-7.4-10.9-13.5-16.7,2.8,4.8,11.1,7.4,12.4,19.4a30.1108,30.1108,0,0,0-2,8.6h0c-7.5,19.7-34.8,18.7-54.6,22.2,12.5-12.1,23.8-12.5,41.7-17.2-9,1.4-19.3.2-28.6,5.1,4.1-6.4,10.6-9.7,17.4-14.3-2.8,1.1-6.4,1.9-10.8,4.8.3-8,2.3-20.6,13.2-23.2-15.4,1.4-10.8,21.3-21.1,29.8.4-5.6,2.5-11.9-1.8-18.2,3,5.1,1.9,12.2-.1,19.7-.5.3-.8.6-6.3,6.1h-.1l-.1.1h0l-.1.1h0c-.1.1-.4.3-1.2,1h-.1l-.1.1-.1.1-.1.1c-.1,0-.1.1-.2.1a.0979.0979,0,0,0-.1.1l-.1.1-.1.1a.3491.3491,0,0,1-.2.1h0a.0979.0979,0,0,0-.1.1h0a82.268,82.268,0,0,1-33.6,8.1C401.5006,402.5,411.2006,378.8,427.8006,360.3Zm-5.6,56.4c.4-.2,1.4-.7,2.7-1.3A20.1791,20.1791,0,0,1,422.2006,416.7Zm9.4-5.7Zm-55.6,35.8c.5-.6,1-1.1,1.5-1.7,4.4,0,10.5-.2,16.8-.7-8,4.7-9.8,16.9-20.8,19.7,2.3-2.8,8.4-8.1,8-13.6-.7,4.3-7.1,11.9-11.5,14.5-.8.4-6.9.7-19.5,2.7A121.727,121.727,0,0,0,376.0006,446.8Zm6.1-159.7c0,.3.1.5.1.8-.1-.3-.1-.1-.4-.7A.3677.3677,0,0,1,382.1006,287.1Zm-18.7-1.9a24.8058,24.8058,0,0,0,4.7-12.3,70.9143,70.9143,0,0,1,10.8,14.4c-4.4.3-11.3-.7-17.9.3A27.1794,27.1794,0,0,0,363.4006,285.2Zm-7.4,5.2c5.6-1.8,15.3-2.3,23-2.7,4.1,8.9,3,20.1.4,30.7-11.3-12.7-23.5-2.6-24.2-27.7A1.5959,1.5959,0,0,1,356.0006,290.4Zm-1.9.9c-4.3,35.4,41.8,10.6,14.3,55.6-8.8-14.1-22.3-24.3-30.6-40.2C340.3006,300.1,345.8006,295,354.1006,291.3Zm-19.6,57c.7.9,1.4,1.8,2,2.6-9.4,2.3-16.1-3-19.3-12.9.9,2.9,2.4,7.4,4.5,10.4-6.1-4.1-14.7-8.9-19.1-16.4,4.4,7.9,12.6,14.8,22.3,20.5-3.3.9-4,8.4-13.1,7.6,3.4.9,6.1,1.7,14.2-7.1-.1,0-.2-.1-.3-.1.1,0,.2.1.3.1l.2-.2v.1h0c21.9-2.3,24.2,24.3,20.3,42.4-4.7,3.9-9.7,10.6-14.1,16.5-.1-8.1-.8-17.8-5.4-26.6,2.4,0,7,.3,10.3.7a100.3152,100.3152,0,0,0-10.7-1.5c-2-4.3-6.5-8.9-7.6-14.5.4,3.8,3.2,8.3,6.2,14.4-2-.1-4.1-.2-6.3-.1-1.5-2-6.7-3.6-7.8-7.6.3,2.2,1.5,2.9,6.7,7.6-5.8.2-12.7,2.5-18.9,6.6,7.8-12.3-.2-32.6,13.7-44-13.4,9-8.7,26.7-16,41.2.7-7.8,4.9-21.6-3.2-29.9,7.5,8.5,1.3,21.2,1.1,32.6a19.906,19.906,0,0,1-8.4,5.4c-7.1-13.7-11.2-31.5-16.2-48.4h0v-.4c0,.1.1.2.1.3.7-2.3,2.9-7.8,9.8-16.9h0c4.8-3.4,15.1-5.7,17.1-14.8-1.5,5.9-8.6,9.5-15.2,11.9,5.6-9.1,8.6-22,13.3-32.9-4.3,7.8-7.8,18.9-13.5,28.3,0-6.5,4-14.1,3.7-22.5a83.88,83.88,0,0,1-17,41,6.4177,6.4177,0,0,1,.2.7c-.1-.2-.2-.3-.3-.5l.1-.1a82.7311,82.7311,0,0,1-2.6-30.5c.8-1.5,13.5-16.7,19-21.9-6.5,5.3-9.7,9.1-18.5,17.9.3-12.3,12.1-21.1,16-33.5,7.5.3,16.1,4.4,22.4,10.4C307.9006,307,319.2006,329.9,334.5006,348.3Zm-68.2,27.6c1,.6,1.7,1.1,3.3,2.2.9,10.4,10.5,21.8,7.6,33.8-5.9-9.6-8.2-23.4-11.9-36.6A8.7872,8.7872,0,0,1,266.3006,375.9Zm-2.1-4.6a141.702,141.702,0,0,0-8.5-20.3c2.2,1.5,4.3,4.5,10.3,9.9.6,3,1.6,8,2.6,12.6C267.5006,373,266.7006,372.5,264.2006,371.3Zm21.5-106.7c.4.8-.3.1,1.9,3.2-4.4-.8-9-6.5-18.2-12.1,5.1-.4,11.2-.9,18.3-1.4.1.1.1.1.1.2v-.2a33.82,33.82,0,0,1,16,2.1h.2c.3.1.5.2.8.3v.2h0a82.7808,82.7808,0,0,0-1.2,21.1,62.2445,62.2445,0,0,0-12.4-8.5c-1.2-1.2-2.4-1.6-4.8-5.3-.6-2.4-.1-2.8,1.2-9.5C287.5006,255.8,285.8006,258.3,285.7006,264.6Zm25.2-32.7c-.2,3.4,1.4,5.7-1.3,10.4-2.5-2.8-4.4-4.9-8.1-9.2,1.4-5.6,8.7-10.6,10.9-18.2C313.1006,218.4,310.2006,227.5,310.9006,231.9Zm-14.2,45c-.7-.5-.1.3-2.8-2.2C294.9006,275.5,295.8006,276.2,296.7006,276.9Zm43.1-82.6a1.38,1.38,0,0,0,.3.4c-.2.1-.3.1-.5.2-2.2,6.7-4.2,12.9-7.4,18.5-.5.4-1.6,1.4-2.9,2.6s-2.8,2.6-4,3.8h0c-.3.4-1.8.5-8.2,5.1,1-7.8,6.8-15.2,10.3-24.3,3-1.7,6.4-3,12.3-5.7A1.27,1.27,0,0,1,339.8006,194.3Zm-6.7-8.2a12.9715,12.9715,0,0,0,.8-3.4,44.7779,44.7779,0,0,0,5,10.2c-2.1.9-6.7,2.3-10.2,3.8C329.8006,193.7,330.9006,191.2,333.1006,186.1Zm-12.9-10a53.6229,53.6229,0,0,1,10.6-2.5c3.1,9.8-4.3,18.1-8.8,28.9.4-7.5.9-16.9-2.9-26C319.5006,176.4,319.8006,176.2,320.2006,176.1Zm-9.6.8a40.7928,40.7928,0,0,0,4-4.4c.4.8,0-.1,1.9,3.1-1.3.5-2.6.8-7.6,3C309.5006,178,310.0006,177.4,310.6006,176.9Zm-21.4,32.5c.7-5.9,2.5-14.9,8.3-20.7a78.9436,78.9436,0,0,1,19.8-11.5c3.1,11.1,2.6,27.7-3,38.4.2-5.6-2.9-17.7-6.4-23.5,1.3,3.5,4.5,11.1,4.5,17.6a5.6079,5.6079,0,0,0-3.6-2.6c10.6,4.4-5.3,17.3-8.9,23.9C295.9006,225.5,289.0006,218.8,289.2006,209.4Zm-13.6,32.4a34.6372,34.6372,0,0,0,17.8,2.5c1.2,1.8,1.7,2.5,4,5.7-9.5-.5-20.1,2-31.3,3.7-.9-.6-3-2.1-5-3.5.7.6,1.5,1.3,4.4,3.7-4.6.3-12.9,3.8-17.5-1.8a28.4773,28.4773,0,0,0,7.1-9.2c5.3-.9,13.1,0,19.8-.9A.952.952,0,0,1,275.6006,241.8Zm-3.2-1.5c-4.4.7-10.4.4-16.9,1.7.7-2.2,1.9-4.8,1.1-12.7h.4c2,1.5,3.9,3,5.8,4.5A62.4564,62.4564,0,0,0,272.4006,240.3Zm-15.5-15.2c.9.8,1.4,1.2,3.6,3.1-1.2-.8-2.5-1.6-3.7-2.4C256.8006,225.5,256.9006,225.3,256.9006,225.1Zm-2.5-3.2c.6.7-.5,0,2.4,3a6.3928,6.3928,0,0,0-.2.7c-.8-.5.1,0-3.1-1.9A7.5677,7.5677,0,0,1,254.4006,221.9Zm-2,4.6c0-.2.1-.3.1-.5.6.4.3.2,1.3.9-.4,0-.9-.1-1.6-.1C252.3006,226.7,252.3006,226.6,252.4006,226.5Zm-6.3-4.9q2.85,1.8,5.7,3.9c-.1.2-.1.3-.5,1.3-1.2-.1-2.6-.2-5.8-.5C245.7006,224.7,245.9006,223.1,246.1006,221.6Zm-1.3,9.6c.2-1.1.3-2.2.5-3.3,2,.3.8.1,5.2.8-.8,2-2.5,4.9-6.9,9.9C244.0006,236.1,244.5006,233.7,244.8006,231.2Zm-4.9,22.4,1.8-6.9a44.6573,44.6573,0,0,1,2.2-4.7,7.759,7.759,0,0,0-.3-1.9c0,.2.2.7.4,1.7,1.7-3.7,4.9-5.1,7.6-12.9,1.7.1,1,.2,4.4.3-.2,4,.5,7.6-2.4,13.1a21.1563,21.1563,0,0,1-7.5.2,21.2027,21.2027,0,0,0,7.2.5,27.7419,27.7419,0,0,1-6.5,7.1,37.577,37.577,0,0,1-2.7-8.2c0,.1-.1.1-.1.2a33.8085,33.8085,0,0,0,2.2,8.5c-1.5,1.1-2.5,1.6-6.6,4.9A10.7846,10.7846,0,0,1,239.9006,253.6Zm2.3,75.3c-1.7-11.6,8.1-23.7,4.7-36.9,2.4,9.9-5.9,21.3-7.3,33.2-7.2-7.6-8.4-19.8-9.6-32.3,2.2-1.7,2-.8,6.3-5.4,2.8-.9,2.5-2.9,8.9-6.6-.1-.1-2.1.7-7.8,5.1a28.12,28.12,0,0,0,3.7-6.7c.3-.5,3.9-2.7,5.5-5.5-.1.2-.6,1.2-4.9,4.3.4-.5-.3-3.6,5-8.7-3,2.2-2.6,1.9-8.4,13.1-.3-1.7-4.2-4.5-1.7-7.3-2,1.9-.6,3.8,1.2,8a27.837,27.837,0,0,1-7.8,7.2c-.7-8.6,6.9-17.9,7-29.7a.0979.0979,0,0,1-.1.1l-.1.1.2-.5h0v1.4h0a1.9248,1.9248,0,0,1,1,.2v.1c1.8-2.7,5.2-5.9,9.5-9.3,3.8,5.6,13.3,4.3,20.9,3.3,4.2,2.2,11.6,11.6,21.5,16.1-1.9-.2-1.6-.7-7.5-.9a20.5729,20.5729,0,0,0,0-2.5,20.9336,20.9336,0,0,1-.2,2.5c-8.7,2.3-18.6,2.5-27.3-2.1a31.9122,31.9122,0,0,0,11.1,5.4v-.9c3.9.9,10.4-.6,16.1-.9-2.6,7.8-10.4,14.1-15.6,22.7.8-3.9,0-12.2-.4-18.5.4,17.3-6.8,36-5.6,55-4.7-5.7-13.1-12.7-13.1-22.4-.8,9.2,7.1,17.5,13.5,26.4.9,7.8,2.7,14.2,4.6,23.5-2.1-1.3-3.4-3.8-10.6-8.7A195.2886,195.2886,0,0,0,242.2006,328.9Zm-53.1,42.9c-.5,0-1.1-.1-1.6-.1-.2-.4-.4-.7-.6-1.1,1,.4,1.9.8,2.9,1.2Zm8.9,14.8c-1.9-2.8-5.1-6.9-7.8-10.6a26.691,26.691,0,0,0,9.6-.4c7.7,2.7,14.2,5.6,22.2,8.5-9.5,3-4.9,25.5-18.9,33.9C206.4006,408.2,204.6006,396.3,198.0006,386.6Zm1.8,37c19.2-5,10.8-27.4,23-39.2,7.1,2.3,15.7,2.4,23.9,6.3,1.8,9.6,3.8,20.9,8.7,30.6-12.1-5.9-18.5-9.8-19-28.1-1,1.7.3,3.6.4,9.9h0c-1.8-3.4-9.1-7.7-13.7-10.9,4.4,4.2,12.1,7.3,14.5,16.2-4.7-3.1-13.7-3.9-19.4-9.4,4.4,5.1,13.1,7.3,20.1,11.4,3.2,8.1,12.8,11.8,20.5,17,5.5,8.8,16.6,19.1,26.2,24.8a181.3459,181.3459,0,0,0-54.6,26.5c-2.3,1.6-3.3,2.2-7.5,5.2a55.9429,55.9429,0,0,0-4.7-11.8c9.8-3.8-.8-7.7,23.6-13.3-5.7.9-14,.7-18.1,6.2a22.922,22.922,0,0,0,1.9-8.3c1.6-1.2,9.4-9.4,13-13.3-2.5,2.5-10.5,9.3-13.1,11.9-3-11-2.9-24.7,6.5-34.4a38.8084,38.8084,0,0,0-9,13.9c-.2-2.1-1.3-6.3-2.2-10.3,1.5,8.4-.1,16.8,1.6,27.9-5.1-2.9-8.9-9.4-10.1-17.1.9,5.5,1.5,13.1,10.2,19.1,0,5-1.1,9.7-6.8,13.7a54.3193,54.3193,0,0,0-6.9-9.6c.1.1.1.2.2.3-.3-.4-.2-.3-.7-.9-.1-.1-.2-.2-.2-.3l-.1-.1C199.8006,447.4,190.4006,436.1,199.8006,423.6Zm-31,40.6c-2.3-4.3-4.9-7.7-8.8-14.2a44.3739,44.3739,0,0,1,2.4-8.4c3,1.5,9.4,3.3,15.2,4.8,4.1,5.2,7.3,9.6,17.9,9,7.5,10.2,15.1,23.3,18.6,35.8h0l-.4.4-.4.4C209.7006,473.3,186.0006,469.1,168.8006,464.2Zm-30.9,56.6-.3.3a49.1906,49.1906,0,0,1-12.7-9.4c5.8-3.1,16-11.1,21.3-14,5.4,2.2,9.5,4.2,16.5,6q-4.5,2.7-9.3,5.7a25.0253,25.0253,0,0,1-.9-6.7,24.1172,24.1172,0,0,0,.5,7c-1.7,1.1-1.5.9-7,4.4A74.19,74.19,0,0,0,137.9006,520.8Zm18.8,10.7c-4.7-1.4-9.9-5.1-15.8-8.5,1.4-1,4.1-3.2,7-5a37.8244,37.8244,0,0,0,10,14A3.08,3.08,0,0,0,156.7006,531.5Zm3.9,1.4c-2.8-3.9-9.6-8.2-12.5-15.2,1.4-.8,3.6-2,7-3.7,5.1,5,11.9,14.7,14.3,22.6C166.7006,535.3,163.7006,534.1,160.6006,532.9Zm25.9,14.7a66.5014,66.5014,0,0,0-13.9-9.3c-2.3-7.4-8.9-18.1-17.1-24.7,8-3.8,13.9-8.9,24.1-9.3-1.9,4.7-4.6,13.3-11,16,5.8-1.9,9.9-9.7,12.8-16.4,5.8-1.4,12.8-5.9,17.3-11.6,1.5,1.9,4,5.7,6.3,9.2h0C196.2006,515.4,191.2006,530.3,186.5006,547.6Zm16.8,165.4h0a30.5813,30.5813,0,0,0,2-2.5,17.2327,17.2327,0,0,1-.7,2.1,132.3667,132.3667,0,0,1-7.5,18.3c-5.9.7-11.7,1.4-17.2,2.2A154.3035,154.3035,0,0,0,203.3006,713Zm-43,14.1a119.2729,119.2729,0,0,0-14,11.9c-11,3.7-21.9,6.1-32,8.4a55.2077,55.2077,0,0,0,5.6-8.6C132.3006,733.3,145.6006,731.3,160.3006,727.1Zm-45,13.6a38.7343,38.7343,0,0,1-4.1,7.5,156.8552,156.8552,0,0,0-21.2,6.2C98.4006,748,106.9006,742.1,115.3006,740.7Zm106.4-11.3a124.7524,124.7524,0,0,1,8.8-11.5c.9,3.6,1.9,7.5,2.9,11.5Q228.0006,729.25,221.7006,729.4Z'
            />
            
           
            
          </g>
        </g>
      </StyledTree>
    </SvgContainer>
  );
}

export default Tree;
