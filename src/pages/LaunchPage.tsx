import React, {useState, useEffect} from 'react';

import {LaunchList, LaunchProps} from '../components/LaunchList';
import {getAllLaunches} from '../api';

import '../styles/LaunchPage.scss';
import logo from '../assets/img/launch-home.png';

export const LaunchPage = () => {

    const [launches, setLaunches] = useState<Array<LaunchProps>>([]);

    const loadLaunches = async () => {
        const apiLaunches = await getAllLaunches();
        console.log(apiLaunches);
        setLaunches(apiLaunches);
    };

    useEffect(() => {
        loadLaunches();
    }, []);

    return (
        <div className='launch-page'>
            <img src={logo} alt='rocket-launch'/>
           <LaunchList launches={launches}/>
        </div>
    )
};