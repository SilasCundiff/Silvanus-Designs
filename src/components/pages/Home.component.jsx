import React from 'react';
import { motion } from 'framer-motion';
import Background from './page-components/Background.component';
import HomeContent from './page-components/HomeContent.component';
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { ease: 'easeInOut' },
  },
};

function Home(props) {
  return (
    <motion.div
      className='container'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <HomeContent />
      <Background page={props.page} />
    </motion.div>
  );
}

export default Home;
