import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CalculatorPage from '../components/pages/CalculatorPage';
import '@testing-library/jest-dom/extend-expect';

const calculator = {};

beforeEach(() => {
  const { unmount } = render(<CalculatorPage />);
  calculator.unmount = unmount;
});

afterEach(() => {
  calculator.unmount();
});

test('should update display component with numbers', () => {
  fireEvent.click(screen.getByText('9'));
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('6'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('0'));

  expect(screen.getByRole('main')).toHaveTextContent('95620');
});

test('should update display component with numbers and an operation', () => {
  fireEvent.click(screen.getByText('9'));
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('6'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('0'));
  fireEvent.click(screen.getByText('X'));

  expect(screen.getByRole('main')).toHaveTextContent('X');
});

test('should update display component with two numbers and an operation', () => {
  fireEvent.click(screen.getByText('9'));
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('6'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('0'));
  fireEvent.click(screen.getByText('X'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('0'));

  expect(screen.getByRole('main')).toHaveTextContent('95620 X 20');
});

test('should update display component with the correct result', () => {
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('0'));
  fireEvent.click(screen.getByText('X'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('='));

  expect(screen.getByRole('main')).toHaveTextContent('40');
});

test('should update display component with the correct total when clicking equal', () => {
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('0'));
  fireEvent.click(screen.getByText('X'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('='));

  expect(screen.getByRole('main')).toHaveTextContent('40');
});

test('should update display component with the correct total when clicking another operation', () => {
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('0'));
  fireEvent.click(screen.getByText('X'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('+'));

  expect(screen.getByRole('main')).toHaveTextContent('40');
});

test('should divide total with 100 if clicked on %', () => {
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('0'));
  fireEvent.click(screen.getByText('%'));

  expect(screen.getByRole('main')).toHaveTextContent('0.2');
});

test('should multiply total by minus if clicked on +/-', () => {
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('0'));
  fireEvent.click(screen.getByText('+/-'));

  expect(screen.getByRole('main')).toHaveTextContent('-20');
});

test('should clear the display if clicked on AC', () => {
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('8'));
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('8'));
  fireEvent.click(screen.getByText('AC'));

  expect(screen.getByRole('main')).toHaveTextContent('0');
});
