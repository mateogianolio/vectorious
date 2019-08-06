import {
  deepStrictEqual,
  throws,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) reduce', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([1, 2, 3]);
    const y: NDArray = new NDArray([1, 2, 3, 4, 5, 6]);
    const sum: (a: number, b: number) => number = (a: number, b: number): number => a + b;

    deepStrictEqual(6, x.reduce(sum, 0));
    deepStrictEqual(21, y.reduce(sum));
  });

  it('should throw error if empty vector with no initial value', () => {
    const x: NDArray = new NDArray();
    const sum: (a: number, b: number) => number = (a: number, b: number): number => a + b;
    throws(() => { x.reduce(sum); }, Error);
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([1, 2, 3]);
    const y: NDArray = new NDArray([1, 2, 3, 4, 5, 6]);
    const sum: (a: number, b: number) => number = (a: number, b: number): number => a + b;

    deepStrictEqual(6, NDArray.reduce(x, sum, 0));
    deepStrictEqual(21, NDArray.reduce(y, sum));
  });
});
