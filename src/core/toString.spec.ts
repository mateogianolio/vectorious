import {
  strictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) toString', () => {
  it('should work as expected', () => {
    strictEqual('array([],dtype=float32)', new NDArray().toString().replace(/\s/g, ''));
    strictEqual(
      'array([0,1,2,3,4,5,6,7],dtype=float32)',
      new NDArray([0, 1, 2, 3, 4, 5, 6, 7]).toString().replace(/\s/g, '')
    );
    strictEqual(
      'array([[0,1,2,3],[4,5,6,7]],dtype=float32)',
      new NDArray([[0, 1, 2, 3], [4, 5, 6, 7]]).toString().replace(/\s/g, '')
    );
    strictEqual(
      'array([[[0,1],[2,3]],[[4,5],[6,7]]],dtype=float32)',
      new NDArray([[[0, 1], [2, 3]], [[4, 5], [6, 7]]]).toString().replace(/\s/g, '')
    );
  });

  it('should work as the static equivalent', () => {
    strictEqual('array([],dtype=float32)', NDArray.toString(new NDArray()).replace(/\s/g, ''));
    strictEqual(
      'array([0,1,2,3,4,5,6,7],dtype=float32)',
      NDArray.toString(new NDArray([0, 1, 2, 3, 4, 5, 6, 7])).replace(/\s/g, '')
    );
    strictEqual(
      'array([[0,1,2,3],[4,5,6,7]],dtype=float32)',
      NDArray.toString(new NDArray([[0, 1, 2, 3], [4, 5, 6, 7]])).replace(/\s/g, '')
    );
    strictEqual(
      'array([[[0,1],[2,3]],[[4,5],[6,7]]],dtype=float32)',
      NDArray.toString(new NDArray([[[0, 1], [2, 3]], [[4, 5], [6, 7]]])).replace(/\s/g, '')
    );
  });
});
