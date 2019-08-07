import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) push', () => {
  it('should start with NDArray(1, 2), push(3) to get NDArray(1, 2, 3)', () => {
    deepStrictEqual(new NDArray([1, 2, 3]), new NDArray([1, 2]).push(3));
  });

  it('should work as the static equivalent', () => {
    deepStrictEqual(new NDArray([1, 2, 3]), NDArray.push(new NDArray([1, 2]), 3));
  });
});
