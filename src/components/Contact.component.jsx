import React from 'react'
import Background from './Background.component';
function Contact(props) {
    return (
        <div className='container'>
            <Background page={props.page} />
        </div>
    )
}

export default Contact
