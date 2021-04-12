import React, {useState, useEffect} from 'react';

import {LaunchList} from '../components/LaunchList';
import {getAllLaunches} from '../api';

import '../styles/LaunchPage.scss';

import sortIcon from '../assets/icon/sort.png';
import spacexLogo from '../assets/img/spacex-logo.png';
import launchLogo from '../assets/img/launch-home.png';

export interface LaunchItem {
    missionName: string;
    rocketName: string;
    launchDate: Date;
}

export const LaunchPage = () => {

    const [launches, setLaunches] = useState<Array<LaunchItem>>([]);
    const [sortOrder, setSortOrder] = useState<string>('asc');

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

    const changeSortOrder = () => {
        sortOrder === 'asc' ? setSortOrder('desc') : setSortOrder('asc');
        sortLaunches();
    }

    const sortLaunches = () => {
        return launches.sort(function(a, b) {
            const varA = new Date(a.launchDate);
            const varB = new Date(b.launchDate);

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }

            return sortOrder === 'asc' ? comparison * -1 : comparison;
        });
    }

    return (
        <div className='launch-page'>
            <div className='launch-page-header'>
                <img 
                    className='spacex-logo' 
                    src={spacexLogo} 
                    alt='spacex title logo'
                    />
                <button
                    onClick={() => loadLaunches()}>
                    Reload data
                </button>
            </div>

            <div className='launch-page-content'>
                <img className='launch-logo' src={launchLogo} alt='rocket launch logo'/>
                <div>
                    <button 
                        onClick={changeSortOrder}>
                        Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
                        <img className='sortIcoon' src={sortIcon} alt='up and down sort icons'/>
                    </button>
                <LaunchList launches={launches}/>
                </div>
           </div>
        </div>
    )
};