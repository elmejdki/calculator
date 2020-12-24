import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../components/pages/HomePage';

it('renders correctly the Home Page', () => {
  const tree = renderer.create(<HomePage />).toJSON();

  expect(tree).toMatchSnapshot();
});
