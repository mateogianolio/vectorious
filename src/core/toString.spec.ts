import {
  strictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) toString', () => {
  it('should work as expected', () => {
    strictEqual('array([], dtype=float32)', new NDArray().toString());
    strictEqual(
      'array([\n  0, 1, 2, 3,\n  4, 5, 6, 7\n], dtype=float32)',
      new NDArray([0, 1, 2, 3, 4, 5, 6, 7]).toString()
    );
    strictEqual(
      'array([\n  [ 0, 1, 2, 3 ],\n  [ 4, 5, 6, 7 ]\n], dtype=float32)',
      new NDArray([[0, 1, 2, 3], [4, 5, 6, 7]]).toString()
    );
    strictEqual(
      'array([\n  [ [ 0, 1 ], [ 2, 3 ] ],\n  [ [ 4, 5 ], [ 6, 7 ] ]\n], dtype=float32)',
      new NDArray([[[0, 1], [2, 3]], [[4, 5], [6, 7]]]).toString()
    );
  });

  it('should work as the static equivalent', () => {
    strictEqual('array([], dtype=float32)', NDArray.toString(new NDArray()));
    strictEqual(
      'array([\n  0, 1, 2, 3,\n  4, 5, 6, 7\n], dtype=float32)',
      NDArray.toString(new NDArray([0, 1, 2, 3, 4, 5, 6, 7]))
    );
    strictEqual(
      'array([\n  [ 0, 1, 2, 3 ],\n  [ 4, 5, 6, 7 ]\n], dtype=float32)',
      NDArray.toString(new NDArray([[0, 1, 2, 3], [4, 5, 6, 7]]))
    );
    strictEqual(
      'array([\n  [ [ 0, 1 ], [ 2, 3 ] ],\n  [ [ 4, 5 ], [ 6, 7 ] ]\n], dtype=float32)',
      NDArray.toString(new NDArray([[[0, 1], [2, 3]], [[4, 5], [6, 7]]]))
    );
  });
});
