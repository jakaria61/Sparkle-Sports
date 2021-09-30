import React from 'react';
import bgImage from '../Asset/bg-header (1).jpg'
import Teams from '../Teams/Teams';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className='team-container'>
                <img className='header-img' src={bgImage} alt="" />
                <h1 className='team-name'>Sparkle Sports</h1>
            </div>
            <Teams></Teams>
        </div>
    );
};

export default Home;