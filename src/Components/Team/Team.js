import React from 'react';
import './Team.css'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
const Team = ({ team }) => {
    const { strTeamBadge, strTeam, idTeam } = team;
    const url = `/team/${idTeam}`
    return (
        <div className='col-md-4 text-center ' >
            <div className='team-container'>
                <img src={strTeamBadge} alt="" className='img-fluid' />
                <h3>{strTeam}</h3>
                <p>Type: Football</p>
                <Link to={url}>
                    <Button className='regular-button' variant="outline-secondary">See More <i class="far fa-arrow-alt-circle-right"></i></Button>
                </Link>
            </div>

        </div>
    );
};

export default Team;