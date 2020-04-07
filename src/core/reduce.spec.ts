import {
  deepStrictEqual,
  throws,
} from 'assert';

import { reduce } from './reduce';
import { array } from './array';

describe('(v) reduce', () => {
  it('should work as expected', () => {
    const x = array([1, 2, 3]);
    const y = array([1, 2, 3, 4, 5, 6]);
    const sum: (a: number, b: number) => number = (a: number, b: number): number => a + b;

    deepStrictEqual(6, x.reduce(sum, 0));
    deepStrictEqual(21, y.reduce(sum));
  });

  it('should throw error if empty vector with no initial value', () => {
    const x = array();
    const sum: (a: number, b: number) => number = (a: number, b: number): number => a + b;
    throws(() => { x.reduce(sum); }, Error);
  });

  it('should work as the static equivalent', () => {
    const x = array([1, 2, 3]);
    const y = array([1, 2, 3, 4, 5, 6]);
    const sum: (a: number, b: number) => number = (a: number, b: number): number => a + b;

    deepStrictEqual(6, reduce(x, sum, 0));
    deepStrictEqual(21, reduce(y, sum));
  });
});
