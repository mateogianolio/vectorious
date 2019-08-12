import {
  deepStrictEqual,
} from 'assert';

import { TypedArray } from '../types';

import v = require('..');

describe('(v) each', () => {
  it('should work as expected', () => {
    const x: v = v.array([1, 2, 3]);
    x.each((value: number, index: number, src: TypedArray) => {
      src[index] = value * 2;
    });

    deepStrictEqual(v.array([2, 4, 6]), x);
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([1, 2, 3]);
    v.each(x, (value: number, index: number, src: TypedArray) => {
      src[index] = value * 2;
    });

    deepStrictEqual(v.array([2, 4, 6]), x);
  });
});
