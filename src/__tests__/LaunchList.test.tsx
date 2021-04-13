import { render} from '@testing-library/react';

import { LaunchList } from '../components/LaunchList';
import { LaunchItem } from '../pages/LaunchPage';

const launchItem1: LaunchItem = {
    missionName: 'Mission 1',
    rocketName: 'Rocket 1',
    launchDate: new Date('2006-03-25T10:30:00+12:00')
};

const launchItem2: LaunchItem = {
    missionName: 'Mission 2',
    rocketName: 'Rocket 2',
    launchDate: new Date('2008-08-25T10:30:00+12:00')
};

const launchItems: Array<LaunchItem> = [
    launchItem1,
    launchItem2
];

describe('Launch list component tests', () => {
  it('renders', () => {
    const { container } = render(
        <LaunchList 
          launches={launchItems}
          />
    );
    expect(container).toBeDefined();
    expect(container).not.toBeNull();
  });

  it('renders a snapshot', () => {
    const { container } = render(<LaunchList launches={launchItems} />);

    expect(container).toMatchSnapshot();
  });
});