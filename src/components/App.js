import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

// eslint-disable-next-line no-console
console.log(calculate({ total: 12, next: 23, operation: 'X' }, 'X'));

const App = () => (
  <>
    <h1>App Component</h1>
    <Display result="0" />
    <ButtonPanel />
  </>
);

export default App;
