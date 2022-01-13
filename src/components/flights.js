import React, {useEffect, useState} from 'react';
import Flight from "./flight";

const Flights = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/').then(value => value.json())
            .then(value => {
                // setFlights(value)
                let filteredFlights = value.filter((e) => {
                    return e.launch_year !== '2020';
                })
                setFlights(filteredFlights);
            })
    }, []);

    return (
        <div className={'flights'}>
            {flights.map(value => <Flight key={value.mission_name} missionName={value.mission_name}
                                          launchYear={value.launch_year} missionImg={value.links.mission_patch_small}/>)}
        </div>
    );
};

export default Flights;