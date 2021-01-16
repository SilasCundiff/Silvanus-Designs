import React from 'react'
import Background from './page-components/Background.component';

function Home(props) {
    return (
        <div className='container'>
            <Background page={props.page} />
        </div>
    )
}

export default Home
