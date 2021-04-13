import { render, getByTestId } from '@testing-library/react';

import { LaunchListItem } from '../components/LaunchListItem';
import { LaunchItem } from '../pages/LaunchPage';

const mockProps = {
    number: 1,
    missionName: 'Mission 1',
    rocketName: 'Rocket 1',
    launchDate: '25 March 2006'
};

describe('Launch Item Component tests', () => {
  it('renders', () => {
    const { container } = render(<LaunchListItem {...mockProps} />);

    expect(container).toBeDefined();
    expect(container).not.toBeNull();
  });

  it('renders a snapshot', () => {
    const { container } = render(<LaunchListItem {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});