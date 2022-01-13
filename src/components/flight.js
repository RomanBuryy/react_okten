import React from 'react';

const Flight = (props) => {

    const {missionName, launchYear, missionImg} = props;

    return (
        <div className={'flight'}>
            <div>
                <h3>{missionName}</h3>
                <p>{launchYear}</p>
            </div>
            <img src={missionImg} alt={missionName}/>
        </div>
    );
};

export default Flight;