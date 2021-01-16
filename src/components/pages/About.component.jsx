import React from 'react'
import Background from './page-components/Background.component';
import {motion} from 'framer-motion'
function About(props) {
    return (
        <div className='container'>
        <motion.div initial="initial" animate="in" exit="out" variants={props.pageVariants}>
            <Background page={props.page} />
        </motion.div>
            
        </div>
    )
}

export default About
