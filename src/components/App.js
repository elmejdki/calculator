import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const App = () => (
  <React.Fragment>
    <h1>App Component</h1>
    <Display result={'0'} />
    <ButtonPanel />
  </React.Fragment>
);

export default App;