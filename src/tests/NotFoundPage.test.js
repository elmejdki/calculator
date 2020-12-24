import React from 'react';
import renderer from 'react-test-renderer';
import NotFoundPage from '../components/pages/NotFoundPage';

it('renders correctly the NotFound Page', () => {
  const tree = renderer.create(<NotFoundPage />).toJSON();

  expect(tree).toMatchSnapshot();
});
