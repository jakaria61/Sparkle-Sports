import React from 'react';
import './Teaminfo.css'
import male from '../Asset/male.png'
const TeamInFo = ({ league }) => {
    const { strTeam, intFormedYear, strCountry, strGender, strFacebook, strInstagram, strWebsite, strDescriptionEN } = league;
    return (
        <div className='details-contain'>
            <div className='info-container'>
                <div className='information'>
                    <h1>{strTeam}</h1>
                    <p><i class="fas fa-search-location"></i> Founded:{intFormedYear}</p>
                    <p><i class="far fa-flag"></i> Country:{strCountry}</p>
                    <p><i class="fas fa-futbol"></i> Sports Type: Football</p>
                    <p><i class="fas fa-mars"></i> Gender: {strGender}</p>
                </div>
                <div className='team-img'>
                    <img src={male} alt="" />
                </div>
            </div>
            <p>{strDescriptionEN}</p>
            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
    );
};

export default TeamInFo;