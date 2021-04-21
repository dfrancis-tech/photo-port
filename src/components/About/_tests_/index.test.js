import React from 'react';
// retrieve functions from React Testing Library
import { render, cleanup } from '@testing-library/react';
// import extend-expect library from jest-dom package
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// call cleanup utility function to keep things clean
afterEach(cleanup);

// declare the component we are testing
describe('About component', () => {
  // First Test
  it('renders', () => {
    render(<About />);
  });
  
  // Second Test
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
})