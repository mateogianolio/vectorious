import {
  deepStrictEqual,
  throws,
} from 'assert';

import { inv } from './inv';
import { array } from './array';

describe('(v) inv', () => {
  it('should throw error if matrix is not square', () => {
    const x = array([[1, 2]]);

    throws(() => { x.inv(); }, Error);
  });

  it('should work as expected', () => {
    const x = array([
      [2, -1, 0],
      [-1, 2, -1],
      [0, -1, 2],
    ]);
    const y = array([
      [3 / 4, 1 / 2, 1 / 4],
      [1 / 2, 1, 1 / 2],
      [1 / 4, 1 / 2, 3 / 4],
    ]);

    // Need to round result to avoid floating point rounding errors, e.g. 0.99999999994
    deepStrictEqual(y, x.inv().map((value: number) => Number(value.toFixed(2))));
  });

  it('should work as the static equivalent', () => {
    const x = array([
      [2, -1, 0],
      [-1, 2, -1],
      [0, -1, 2],
    ]);

    deepStrictEqual(x.copy().inv(), inv(x));
  });
});
