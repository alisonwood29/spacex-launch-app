import React, {useState, useEffect} from 'react';

import {LaunchList} from '../components/LaunchList';
import {getAllLaunches} from '../api';

import '../styles/LaunchPage.scss';
import spacexLogo from '../assets/img/spacex-logo.png';
import launchLogo from '../assets/img/launch-home.png';

export interface LaunchItem {
    missionName: string;
    rocketName: string;
    launchDate: Date;
}

export const LaunchPage = () => {

    const [launches, setLaunches] = useState<Array<LaunchItem>>([]);

    const loadLaunches = async () => {
        const apiLaunches = await getAllLaunches();
        let launchItems: LaunchItem[] = new Array<LaunchItem>();
        apiLaunches.forEach((launch: any) => {
            const newLaunchItem: LaunchItem = {
                missionName: launch.mission_name,
                rocketName: launch.rocket.rocket_name,
                launchDate: new Date(launch.launch_date_local)
              };
              launchItems.push(newLaunchItem);
        });
        setLaunches(launchItems);
    };

    useEffect(() => {
        loadLaunches();
    }, []);

    return (
        <div className='launch-page'>
            <div className='launch-page-header'>
                <img className='spacex-logo' src={spacexLogo} alt='rocket-launch'/>
                <button
                onClick={() => loadLaunches()}>
                    Reload data
                    </button>
            </div>
            <div className='launch-page-content'>
                <img className='launch-logo' src={launchLogo} alt='rocket-launch'/>
                <LaunchList launches={launches}/>
           </div>
        </div>
    )
};