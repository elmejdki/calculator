import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNumber = new Big(numberOne);
  const secondNumber = new Big(numberTwo);

  switch (operation) {
    case '+':
      return firstNumber.plus(secondNumber).toNumber();
    case '÷':
      try {
        return firstNumber.div(secondNumber).toNumber();
      } catch (e) {
        return 'ERROR';
      }
    case '-':
      return firstNumber.minus(secondNumber).toNumber();
    case 'X':
      return firstNumber.times(secondNumber).toNumber();
    case '%':
      return firstNumber.times(Big(0.01)).toNumber();
    default:
      return -1;
  }
};

export default operate;
