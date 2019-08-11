import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) toArray', () => {
  it('should work as expected', () => {
    deepStrictEqual([], new NDArray().toArray());
    deepStrictEqual([0, 1, 2, 3, 4, 5, 6, 7], new NDArray([0, 1, 2, 3, 4, 5, 6, 7]).toArray());
    deepStrictEqual([[0, 1, 2, 3], [4, 5, 6, 7]], new NDArray([[0, 1, 2, 3], [4, 5, 6, 7]]).toArray());
    deepStrictEqual([[[0, 1], [2, 3]], [[4, 5], [6, 7]]], new NDArray([[[0, 1], [2, 3]], [[4, 5], [6, 7]]]).toArray());
  });

  it('should work as the static equivalent', () => {
    deepStrictEqual([], new NDArray().toArray());
    deepStrictEqual([0, 1, 2, 3, 4, 5, 6, 7], NDArray.toArray(new NDArray([0, 1, 2, 3, 4, 5, 6, 7])));
    deepStrictEqual([[0, 1, 2, 3], [4, 5, 6, 7]], NDArray.toArray(new NDArray([[0, 1, 2, 3], [4, 5, 6, 7]])));
    deepStrictEqual(
      [[[0, 1], [2, 3]], [[4, 5], [6, 7]]],
      NDArray.toArray(new NDArray([[[0, 1], [2, 3]], [[4, 5], [6, 7]]]))
    );
  });
});
