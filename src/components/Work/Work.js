import React from 'react';
import { Link } from 'react-router-dom';


const Work = ({path = '/', img = {alt: '', url: ''}, backgroundColor = 'white' }) => {
    console.log(img)
    return(
    <div className="works">
        <div className="work" style={{backgroundColor}}>
            <Link to={path}>
                <img
                    alt={img.alt}
                    src={img.url}
                />
            </Link>
        </div>
    </div>
)};

export default Work;
