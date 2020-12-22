import calculate from '../logic/calculate';

describe('calculate', () => {
  let initialState;

  beforeEach(() => {
    initialState = { total: null, next: null, operation: null };
  });

  it('should reset state if total contains an ERROR', () => {
    const state = { ...initialState, total: 'ERROR' };
    const buttonName = '%';

    expect(
      calculate(state, buttonName),
    ).toEqual(
      {
        ...state, total: null,
      },
    );
  });

  it('should reset state if total is equal to Infinity', () => {
    const state = { ...initialState, total: Infinity };
    const buttonName = '+';

    expect(
      calculate(state, buttonName),
    ).toEqual(
      {
        ...state, total: null,
      },
    );
  });

  it('should reset state if next is equal to Infinity', () => {
    const state = { ...initialState, next: Infinity };
    const buttonName = 'X';

    expect(
      calculate(state, buttonName),
    ).toEqual(
      {
        ...state, next: null,
      },
    );
  });

  it('should reset state if buttonName is equal to AC', () => {
    const state = { total: 23, next: 2, operation: 'X' };
    const buttonName = 'AC';

    expect(
      calculate(state, buttonName),
    ).toEqual(
      {
        ...initialState,
      },
    );
  });

  it('should change total sign if next was null and total has a correct value', () => {
    const state = { total: 23, next: null, operation: 'X' };
    const buttonName = '+/-';

    expect(
      calculate(state, buttonName).total,
    ).toBe(-state.total);
  });

  it('should change next sign if next has a correct value', () => {
    const state = { total: 23, next: 23, operation: 'X' };
    const buttonName = '+/-';

    expect(
      calculate(state, buttonName).next,
    ).toBe(-state.next);
  });

  it('should divide total by 100 if btnName is equal % and next is null', () => {
    const state = { ...initialState, total: 23 };
    const buttonName = '%';

    expect(
      calculate(state, buttonName),
    ).toEqual(
      {
        ...state, total: 0.23,
      },
    );
  });

  it('should divide next by 100 total is null and next is full', () => {
    const state = { ...initialState, next: 23 };
    const buttonName = '%';

    expect(
      calculate(state, buttonName),
    ).toEqual(
      {
        ...state, total: 0.23, next: null,
      },
    );
  });

  it('should calculate total if all state variables are truthy', () => {
    const state = { total: 2, operation: 'X', next: 23 };
    const buttonName = '+';

    expect(
      calculate(state, buttonName).total,
    ).toBe(46);
  });

  it('should update operation if next or total were truthy', () => {
    const state = { total: 2, operation: 'X', next: 23 };
    const buttonName = '+';

    expect(
      calculate(state, buttonName).operation,
    ).toBe('+');
  });

  it('should append number to next if total and operation were falsey', () => {
    const state = { ...initialState, next: 2 };
    const buttonName = '4';

    expect(
      calculate(state, buttonName).next,
    ).toBe(2 + buttonName);
  });

  it('should append number to next if total and operation were both truthy', () => {
    const state = { total: 4, operation: 'X', next: 2 };
    const buttonName = '4';

    expect(
      calculate(state, buttonName).next,
    ).toBe(2 + buttonName);
  });

  it('should calculate total if buttonName is equal to = sign and all the state is truthy', () => {
    const state = { total: 4, operation: 'X', next: 2 };
    const buttonName = '=';

    expect(
      calculate(state, buttonName),
    ).toEqual({
      ...initialState,
      total: 8,
    });
  });

  it('should add coma to next if next didn\'t includes it', () => {
    const state = { total: 4, operation: 'X', next: 2 };
    const buttonName = '.';

    expect(
      calculate(state, buttonName).next,
    ).toBe(`${state.next}.`);
  });
});
