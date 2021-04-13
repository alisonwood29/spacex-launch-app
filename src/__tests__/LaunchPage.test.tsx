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
});