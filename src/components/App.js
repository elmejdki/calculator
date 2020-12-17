import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

const App = () => (
  <>
    <h1>App Component</h1>
    <Display result="0" />
    <ButtonPanel />
  </>
);

export default App;
