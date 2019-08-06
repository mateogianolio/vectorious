import {
  deepStrictEqual,
  throws,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) binOp', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([1, 1, 1]);
    const y: NDArray = new NDArray([1, 2, 3]);
    const z: NDArray = new NDArray([2, 3, 4]);
    const sum: (a: number, b: number) => number = (a: number, b: number): number => a + b;

    deepStrictEqual(x.binOp(y, sum), z);
  });

  it('should throw error when sizes do not match', () => {
    const x: NDArray = new NDArray([1, 1, 1]);
    const y: NDArray = new NDArray([1, 2, 3, 4]);
    const sum: (a: number, b: number) => number = (a: number, b: number): number => a + b;

    throws(() => { x.binOp(y, sum); }, Error);
  });

  it('should work as the static equivalent of a.binOp(b, (a, b) => a + b)', () => {
    const x: NDArray = new NDArray([1, 1, 1]);
    const y: NDArray = new NDArray([1, 2, 3]);
    const sum: (a: number, b: number) => number = (a: number, b: number): number => a + b;

    deepStrictEqual(x.copy().binOp(y, sum), NDArray.binOp(x, y, sum));
  });
});
