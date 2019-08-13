import {
  deepStrictEqual,
} from 'assert';

import v = require('..');
import { TypedArray } from '../types';

describe('(v) forEach', () => {
  it('should work as expected', () => {
    const x: v = v.array([1, 2, 3]);
    x.forEach((value: number, index: number, src: TypedArray) => {
      src[index] = value * 2;
    });

    deepStrictEqual(v.array([2, 4, 6]), x);
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([1, 2, 3]);
    v.forEach(x, (value: number, index: number, src: TypedArray) => {
      src[index] = value * 2;
    });

    deepStrictEqual(v.array([2, 4, 6]), x);
  });
});
