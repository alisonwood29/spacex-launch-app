import React, { useState, useEffect}  from 'react';

import { LaunchList } from '../components/LaunchList';
import { getAllLaunches } from '../api';

import '../styles/LaunchPage.scss';

import refreshIcon from '../assets/icon/refresh.png';
import sortIcon from '../assets/icon/sort.png';
import spacexLogo from '../assets/img/spacex-logo.png';
import launchLogo from '../assets/img/launch-home.png';

export interface LaunchItem {
    missionName: string;
    rocketName: string;
    launchDate: Date;
};

export const LaunchPage: React.FC = () => {

    const [launches, setLaunches] = useState<Array<LaunchItem>>([]);
    const [sortOrder, setSortOrder] = useState<string>('asc');
    /* WIP for filter by year
    const [yearsFilterList, setYearsFilterList] = useState<Array<>>([]); */

    useEffect(() => {
        loadLaunches();
    }, []);

    const loadLaunches = async () => {
        const apiLaunches = await getAllLaunches();

        const launchItems: LaunchItem[] = new Array<LaunchItem>();

        apiLaunches.forEach((launch: any) => {
            const newLaunchItem: LaunchItem = {
                missionName: launch.mission_name,
                rocketName: launch.rocket.rocket_name,
                launchDate: new Date(launch.launch_date_local)
              };
              launchItems.push(newLaunchItem);
        });
        setLaunches(launchItems);
        /* part of WIP for filter by year
        getYearsToFilterBy(launchItems); */
    };

    /* WIP: filter by year
    const getYearsToFilterBy = ((launchItems: Array<LaunchItem>) => {
        const launchYears = launchItems.map((launchItem: LaunchItem) => {
            return launchItem.launchDate.getFullYear().toString();
        }).filter((year, index, self) => {
            return self.indexOf(year) === index;
    });
        const arrayYears = launchYears.map((year) => {
            return {value: year, label: year}
        })
        setYearsFilterList(arrayYears);
    });
    */

    const changeSortOrder = () => {
        sortOrder === 'asc' ? setSortOrder('desc') : setSortOrder('asc');
        sortLaunches();
    };

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
    };

    /* TODO: onChange function for select component
    const onFilterChange = (e) => {
        set selected year in state
        filter launches where launchDate year === selected year
        set filtered list of launches in state
    } */

    return (
        <div className='launch-page'>
            <div className='launch-page-header'>
                <img 
                    className='spacex-logo' 
                    src={spacexLogo} 
                    alt='SpaceX Title Logo'
                    />
                <button
                    className='refresh-button'
                    data-testid='refresh-button'
                    onClick={() => loadLaunches()}>
                    Reload data
                    <img 
                        className='refresh-icon' 
                        src={refreshIcon} 
                        alt='Refresh Icon'
                    />
                </button>
            </div>

            <div className='launch-page-content'>
                <img className='launch-logo' src={launchLogo} alt='rocket launch logo'/>

                <div className='launch-list-div'>
                    <div className='button-div'>
                        {/* TODO: Select will go here  */}
                        <button
                            className='sort-button'
                            onClick={changeSortOrder}>
                            <span>Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}</span>
                            <img 
                                className='sort-icon' 
                                src={sortIcon} 
                                alt='Up and Down Sort Arrows'
                            />
                        </button>
                    </div>
                    <LaunchList launches={launches}/>
                </div>
           </div>
        </div>
    );
};