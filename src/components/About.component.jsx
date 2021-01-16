import React from 'react'
import Background from './Background.component';
function About(props) {
    return (
        <div className='container'>
            <Background page={props.page} />
        </div>
    )
}

export default About
