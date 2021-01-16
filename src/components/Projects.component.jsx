import React from 'react'
import Background from './Background.component';
function Projects(props) {
    return (
        <div className='container'>
           <Background page={props.page} />
        </div>
    )
}

export default Projects
