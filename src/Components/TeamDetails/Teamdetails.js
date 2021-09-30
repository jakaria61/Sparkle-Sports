import React, { useEffect, useState } from 'react';
import {
    useParams
} from "react-router-dom";
import bgImage from '../Asset/bg-header (1).jpg'
import TeamInFo from '../TeamInfo/TeamInFo';
import './Teamdetails.css'
const Teamdetails = () => {
    const { teamId } = useParams();
    const [leagues, setLeagues] = useState([])

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(res => res.json())
            .then(data => setLeagues(data.teams))
    }, [])
    return (
        <div>
            <div className='team-container'>
                <img className='header-img' src={bgImage} alt="" />
            </div>
            <div >
                {
                    leagues.map(league => <TeamInFo key={league.idTeam} league={league}></TeamInFo>)
                }
            </div>
        </div>
    );
};

export default Teamdetails;