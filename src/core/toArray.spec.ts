import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) toArray', () => {
  it('should work as expected', () => {
    deepStrictEqual([], v.array().toArray());
    deepStrictEqual([0, 1, 2, 3, 4, 5, 6, 7], v.array([0, 1, 2, 3, 4, 5, 6, 7]).toArray());
    deepStrictEqual([[0, 1, 2, 3], [4, 5, 6, 7]], v.array([[0, 1, 2, 3], [4, 5, 6, 7]]).toArray());
    deepStrictEqual([[[0, 1], [2, 3]], [[4, 5], [6, 7]]], v.array([[[0, 1], [2, 3]], [[4, 5], [6, 7]]]).toArray());
  });

  it('should work as the static equivalent', () => {
    deepStrictEqual([], v.array().toArray());
    deepStrictEqual([0, 1, 2, 3, 4, 5, 6, 7], v.toArray(v.array([0, 1, 2, 3, 4, 5, 6, 7])));
    deepStrictEqual([[0, 1, 2, 3], [4, 5, 6, 7]], v.toArray(v.array([[0, 1, 2, 3], [4, 5, 6, 7]])));
    deepStrictEqual(
      [[[0, 1], [2, 3]], [[4, 5], [6, 7]]],
      v.toArray(v.array([[[0, 1], [2, 3]], [[4, 5], [6, 7]]]))
    );
  });
});
