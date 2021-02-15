import React from 'react'
import Background from './page-components/Background.component';
import {motion} from 'framer-motion';
import ContactContent from './page-components/ContactContent.component'

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

function Contact(props) {
    return (
        <motion.div className='container'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
                <Background page={props.page} />
                <ContactContent />
        </motion.div>
    )
}

export default Contact
