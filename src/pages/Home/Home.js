import React from 'react';
import { Link } from 'react-router-dom';

import ArrowIcon from '../../components/ArrowIcon';
import Work from '../../components/Work/Work';

import worksCollection from '../../data/works';

const Home = () => (
    <div className="home">
        <div className="header">
            <h1>Andrea D.N.</h1>
            <p>
                I’m a <span className="highlighted">Junior UI</span> and{' '}
                <span className="highlighted">Graphic designer</span> based in
                Barcelona starting on the path of the UX and UI design.
            </p>
            <div className="link-container">
                <Link className="link" to="/about">More about me <span className="arrow-icon"><ArrowIcon></ArrowIcon></span></Link>
            </div>
        </div>
        <div className="works">
            {worksCollection.map(work => <Work key={work.id} {...work} />)}
        </div>
    </div>
);

export default Home;
