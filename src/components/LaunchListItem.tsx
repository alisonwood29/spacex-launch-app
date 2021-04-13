import React from 'react';

import '../styles/LaunchListItem.scss';

export interface LaunchListItemProps {
    missionName: string;
    number: number;
    rocketName: string;
    launchDate: string;
  }

export const LaunchListItem: React.FC<LaunchListItemProps> = props => {

    return (
        <div className='launch-list-item'>
            <div className='launch-item-left'>
                <div className='launch-number'>#{props.number}</div> 
                <div className='mission-name' data-testid='mission-name'>{props.missionName}</div>
            </div>
            <div className='launch-item-right'>
                <div className='launch-date'>{props.launchDate} </div>
                <div className='rocket-name'>{props.rocketName}</div>
            </div>
        </div>
    )
};