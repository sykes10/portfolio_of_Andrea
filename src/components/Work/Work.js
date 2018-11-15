import React from 'react';
import { Link } from 'react-router-dom';


const Work = ({path = '/', img = {alt: '', url: ''} }) => {
    return(
    <div className="work">
        <Link to={path}>
            <img
                alt={img.alt}
                src={img.url}
            />
        </Link>
    </div>
)};

export default Work;
