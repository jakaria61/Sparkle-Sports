import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Teams.css'
const Teams = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain`)
            .then(res => res.json())
            .then(data => setLeagues(data.teams))
    }, [])
    return (
        <div className='row league-container'>
            {
                leagues.map(team => <Team key={team.idTeam} team={team}></Team>)
            }
        </div>
    );
};

export default Teams;