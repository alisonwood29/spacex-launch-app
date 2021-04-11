import React from 'react';

export interface LaunchListItemProps {
    name: string;
    number: number;
    rocketName: string;
    launchDate: string;
  }

export const LaunchListItem: React.FC<LaunchListItemProps> = props => {

    return (
        <div>
            <p>#{props.number}</p>
           This is a list item for {props.name}
           <p>{props.launchDate}</p>
           <p>{props.rocketName}</p>
        </div>
    )
};