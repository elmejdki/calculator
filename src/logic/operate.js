import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNumber = new Big(numberOne);
  const secondNumber = new Big(numberTwo);

  switch (operation) {
    case '+':
      return firstNumber.plus(secondNumber).toNumber();
    case '÷':
      return firstNumber.div(secondNumber).toNumber();
    case '-':
      return firstNumber.minus(secondNumber).toNumber();
    case 'X':
      return firstNumber.times(secondNumber).toNumber();
    case '%':
      return firstNumber.div(100).toNumber();
    default:
      return -1;
  }
};

export default operate;