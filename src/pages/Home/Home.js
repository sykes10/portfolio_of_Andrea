import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link className="link" to="/about">More about me <span className="arrow-icon">→</span></Link>
            </div>
        </div>
        <div className="works">
            <div className="work splited-bg">
                <Link to="/about">
                    <img
                        alt=""
                        src="https://static.wixstatic.com/media/2dc305_699daaef7a06469ab93c9b10059ce077~mv2_d_1489_1489_s_2.png/v1/fill/w_280,h_280,fp_0.50_0.50,q_90/2dc305_699daaef7a06469ab93c9b10059ce077~mv2_d_1489_1489_s_2.webp"
                    />
                </Link>
            </div>
        </div>
    </div>
);

export default Home;
