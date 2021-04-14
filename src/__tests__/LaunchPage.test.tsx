import { render } from '@testing-library/react';

import { LaunchPage } from '../pages/LaunchPage';

describe('Launch page tests', () => {
  it('renders', () => {
    const { container } = render(<LaunchPage/>);
    
    expect(container).toBeDefined();
    expect(container).not.toBeNull();
  });

  it('renders a snapshot', () => {
    const { container } = render(<LaunchPage />);

    expect(container).toMatchSnapshot();
  });

  // it('should call loadLaunches when reload button clicked', () => {

  // });

  // it('should order items ascending on first load', () => {

  // });

  // it('should change the items order when sort order button clicked', () => {

  // });

  // it('should filter the items by year when filter value selected', () => {

  // });
});