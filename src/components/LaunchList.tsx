import React from 'react';
import { format } from 'date-fns';

import { LaunchListItem } from './LaunchListItem';
import { LaunchItem } from '../pages/LaunchPage';

import '../styles/LaunchList.scss';

export interface LaunchListProps {
    launches: Array<LaunchItem>;
};

export const LaunchList: React.FC<LaunchListProps> = props => {

    const formatDate: (date: Date) => string = date => {
        return format(date, 'dd LLL yyyy');
      };

    return (
        <div className='launch-list' data-testid='launch-list'>
           {props.launches.map((launch: LaunchItem, index: number) => {
                return (
                    <LaunchListItem 
                        missionName={launch.missionName}
                        number={index+1}
                        rocketName={launch.rocketName}
                        launchDate={formatDate(launch.launchDate)}
                        key={index}
                    />
                    );
                })
            }
        </div>
    )
};