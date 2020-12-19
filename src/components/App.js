import React, { useReducer } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'CALCULATE':
        return calculate(state, action.operation);
      default:
        return state;
    }
  }, {
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = operation => {
    dispatch({ type: 'CALCULATE', operation });
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
