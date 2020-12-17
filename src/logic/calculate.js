const calculator = ({ total, next, operation }, buttonName) => {
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
        total: total / 100,
        next: total / 100,
        operation: '%',
      };
    case '÷':
      return {
        total: 0,
        next: total,
        operation: '÷',
      };
    case 'X':
      return {
        total: 0,
        next: total,
        operation: 'X',
      };
    case '+':
      return {
        total: 0,
        next: total,
        operation: '+',
      };
    case '-':
      return {
        total: 0,
        next: total,
        operation: '-',
      };
    case '.':
      return {
        total,
        next,
        operation,
      };
    case '7':
      return {
        total: Number(`${total}7`),
        next,
        operation,
      };
    case '8':
      return {
        total: Number(`${total}8`),
        next,
        operation,
      };
    case '9':
      return {
        total: Number(`${total}9`),
        next,
        operation,
      };
    case '4':
      return {
        total: Number(`${total}4`),
        next,
        operation,
      };
    case '5':
      return {
        total: Number(`${total}5`),
        next,
        operation,
      };
    case '6':
      return {
        total: Number(`${total}6`),
        next,
        operation,
      };
    case '3':
      return {
        total: Number(`${total}3`),
        next,
        operation,
      };
    case '2':
      return {
        total: Number(`${total}2`),
        next,
        operation,
      };
    case '1':
      return {
        total: Number(`${total}1`),
        next,
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

export default calculator;
