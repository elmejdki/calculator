import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorPage from '../components/pages/CalculatorPage';

it('renders correctly the Calculator Page', () => {
  const tree = renderer.create(<CalculatorPage />).toJSON();

  expect(tree).toMatchSnapshot();
});
