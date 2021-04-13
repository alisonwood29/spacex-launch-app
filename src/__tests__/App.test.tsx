import { render } from '@testing-library/react';

import App from '../App';

describe('Test app', () => {
  it('renders', () => {
    const { container } = render(<App />);
    
    expect(container).toBeDefined();
    expect(container).not.toBeNull();
  });

  it('renders a snapshot', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
