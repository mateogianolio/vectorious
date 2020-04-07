import {
  deepStrictEqual,
} from 'assert';

import { forEach } from './forEach';
import { array } from './array';
import { TypedArray } from '../types';

describe('(v) forEach', () => {
  it('should work as expected', () => {
    const x = array([1, 2, 3]);
    x.forEach((value: number, index: number, src: TypedArray) => {
      src[index] = value * 2;
    });

    deepStrictEqual(array([2, 4, 6]), x);
  });

  it('should work as the static equivalent', () => {
    const x = array([1, 2, 3]);
    forEach(x, (value: number, index: number, src: TypedArray) => {
      src[index] = value * 2;
    });

    deepStrictEqual(array([2, 4, 6]), x);
  });
});
