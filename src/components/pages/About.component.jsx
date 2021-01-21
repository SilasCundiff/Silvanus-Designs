import React from 'react';
import AboutContent from './page-components/AboutContent.component'
import Background from './page-components/Background.component';
import {motion} from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: .5 },
  },
  exit: {
    opacity: 0,
    transition: { ease: 'easeInOut' },
  },
};

function About(props) {
    return (
        <motion.div className='container'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <AboutContent />
            <Background page={props.page} />
        </motion.div>
    )
}

export default About
