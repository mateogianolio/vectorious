import {
  deepStrictEqual,
} from 'assert';

import { TypedArray } from '../types';

import { NDArray } from '.';

describe('each', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([1, 2, 3]);
    x.each((value: number, index: number, src: TypedArray) => {
      src[index] = value * 2;
    });

    deepStrictEqual(new NDArray([2, 4, 6]), x);
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([1, 2, 3]);
    NDArray.each(x, (value: number, index: number, src: TypedArray) => {
      src[index] = value * 2;
    });

    deepStrictEqual(new NDArray([2, 4, 6]), x);
  });
});
