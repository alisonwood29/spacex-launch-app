import React, {useState, useEffect} from 'react';
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';

import { LaunchListItem, LaunchListItemProps } from './LaunchListItem';

export interface LaunchProps {
    mission_name: string;
    rocket: {
        rocket_name: string;
    }
    launch_date_local: Date;
}
export interface LaunchListProps {
    launches: Array<LaunchProps>;
};

export const LaunchList: React.FC<LaunchListProps> = props => {

    const formatDate: (date: Date) => string = date => {
        return format(date, 'E LLL dd yyyy, hh:mm:ss a', { locale: enGB });
      };

    return (
        <div>
           {props.launches.map((launch, index) => {
        return (
            <LaunchListItem 
            name={launch.mission_name}
            number={index+1}
            rocketName={launch.rocket.rocket_name}
            launchDate={formatDate(launch.launch_date_local)}
            key={index}
        />
        );
      })
      }
        </div>
    )
};