import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders shading defs', () => {
  render(<App />);
  const shadingDefs = screen.getByTestId("shading-defs");
  expect(shadingDefs).toBeInTheDocument();
});
