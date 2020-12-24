import React from 'react';
import renderer from 'react-test-renderer';
import QuotePage from '../components/pages/QuotePage';

it('renders correctly the Quote Page', () => {
  const tree = renderer.create(<QuotePage />).toJSON();

  expect(tree).toMatchSnapshot();
});
