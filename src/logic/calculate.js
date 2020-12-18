import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  const operations = ['%', '÷', '+', '-', 'X'];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (buttonName === '+/-' && !next && total && total !== 'ERROR') {
    return {
      total: -total,
      next,
      operation,
    };
  }

  if (buttonName === '+/-' && next && total !== 'ERROR') {
    return {
      total,
      next: -next,
      operation,
    };
  }

  if (operations.includes(buttonName) && next && !total) {
    return {
      total: next,
      next: null,
      operation: buttonName,
    };
  }

  if (operations.includes(buttonName) && next && total && operation) {
    return {
      total: operate(total, next, operation),
      next: null,
      operation: buttonName,
    };
  }

  if (operations.includes(buttonName) && total && !next) {
    return {
      total,
      next,
      operation: buttonName,
    };
  }

  if (nums.includes(buttonName) && total && !operation && !next) {
    return {
      total: total ? `${total}${buttonName}` : `${buttonName}`,
      next,
      operation,
    };
  }

  if (nums.includes(buttonName)) {
    return {
      total,
      next: next ? `${next}${buttonName}` : `${buttonName}`,
      operation,
    };
  }

  if (total === 'ERROR') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (buttonName === '=' && total && next && operation) {
    return {
      total: operate(total, next, operation),
      next: null,
      operation: null,
    };
  }

  if (buttonName === '.') {
    if (!next) {
      return {
        total,
        next: '0.',
        operation,
      };
    }

    if (next && !next.includes('.')) {
      return {
        total,
        next: `${next}.`,
        operation,
      };
    }
  }

  return { total, next, operation };
};

export default calculate;
