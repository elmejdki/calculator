import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = operation => {
    setState(prevState => calculate(prevState, operation)); 
  };

  const { next, total, operation } = state;

  return (
    <>
      <Display
        result={
          `${(!total && next) || total || ''}
           ${operation || ''}
           ${(total && next) || ''}`
        }
      />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
