import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  switch (buttonName) {
    case 'AC':
      return {
        total: 0,
        next: 0,
        operation: 'AC',
      };
    case '+/-':
      return {
        total: -total,
        next: -next,
        operation,
      };
    case '%':
      return {
        total: operate(total, next, '%'),
        next: 0,
        operation: '%',
      };
    case '÷':
      return {
        total: operate(total, next, '÷'),
        next: 0,
        operation: '÷',
      };
    case 'X':
      return {
        total: operate(total, next, 'X'),
        next: 0,
        operation: 'X',
      };
    case '+':
      return {
        total: operate(total, next, '+'),
        next: 0,
        operation: '+',
      };
    case '-':
      return {
        total: operate(total, next, '-'),
        next: 0,
        operation: '-',
      };
    case '.':
      return {
        total,
        next: `${next}.`,
        operation,
      };
    case '7':
      return {
        total,
        next: Number(`${next}7`),
        operation,
      };
    case '8':
      return {
        total,
        next: Number(`${total}8`),
        operation,
      };
    case '9':
      return {
        total,
        next: Number(`${total}9`),
        operation,
      };
    case '4':
      return {
        total,
        next: Number(`${total}4`),
        operation,
      };
    case '5':
      return {
        total,
        next: Number(`${total}5`),
        operation,
      };
    case '6':
      return {
        total,
        next: Number(`${total}6`),
        operation,
      };
    case '3':
      return {
        total,
        next: Number(`${total}3`),
        operation,
      };
    case '2':
      return {
        total,
        next: Number(`${total}2`),
        operation,
      };
    case '1':
      return {
        total,
        next: Number(`${total}1`),
        operation,
      };
    case '=':
      return {
        total: 0,
        // eslint-disable-next-line no-eval
        next: eval(`${next} ${operation} ${total}`),
        operation: '',
      };
    default:
      return {
        total, next, operation,
      };
  }
};

export default calculate;
