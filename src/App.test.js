import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App';

test('renders learn react link', () => {
  const renderResult = render(<App />);

  const titleText = renderResult.getByText(/Toy Robot/i);

  expect(titleText).toBeInTheDocument();
});
