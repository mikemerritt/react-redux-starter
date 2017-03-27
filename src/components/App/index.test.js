import React from 'react';
import renderer from 'react-test-renderer';
import App from './index';

// Example test.
describe('App', () => {
  it('renders (example test)', () => {
    const component = renderer.create(
      <App />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
