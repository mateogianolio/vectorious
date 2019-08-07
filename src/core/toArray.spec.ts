import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) toArray', () => {
  it('should work as expected', () => {
    deepStrictEqual([], new NDArray().toArray());
    deepStrictEqual([1, 2, 3], new NDArray([1, 2, 3]).toArray());
  });

  it('should work as the static equivalent', () => {
    deepStrictEqual([], NDArray.toArray(new NDArray()));
    deepStrictEqual([1, 2, 3], NDArray.toArray(new NDArray([1, 2, 3])));
  });
});
