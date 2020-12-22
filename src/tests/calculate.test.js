import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should return true', () => {
    const state = { total: 'ERROR', next: null, operation: null };
    const buttonName = '%';
    expect(
      calculate(state, buttonName),
    ).toEqual(
      { total: null, next: null, operation: null },
    );
  });
});
