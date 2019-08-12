import {
  strictEqual,
} from 'assert';

import v = require('..');

describe('(v) toString', () => {
  it('should work as expected', () => {
    strictEqual('array([],dtype=float32)', v.array().toString().replace(/\s/g, ''));
    strictEqual(
      'array([0,1,2,3,4,5,6,7],dtype=float32)',
      v.array([0, 1, 2, 3, 4, 5, 6, 7]).toString().replace(/\s/g, '')
    );
    strictEqual(
      'array([[0,1,2,3],[4,5,6,7]],dtype=float32)',
      v.array([[0, 1, 2, 3], [4, 5, 6, 7]]).toString().replace(/\s/g, '')
    );
    strictEqual(
      'array([[[0,1],[2,3]],[[4,5],[6,7]]],dtype=float32)',
      v.array([[[0, 1], [2, 3]], [[4, 5], [6, 7]]]).toString().replace(/\s/g, '')
    );
  });

  it('should work as the static equivalent', () => {
    strictEqual('array([],dtype=float32)', v.toString(v.array()).replace(/\s/g, ''));
    strictEqual(
      'array([0,1,2,3,4,5,6,7],dtype=float32)',
      v.toString(v.array([0, 1, 2, 3, 4, 5, 6, 7])).replace(/\s/g, '')
    );
    strictEqual(
      'array([[0,1,2,3],[4,5,6,7]],dtype=float32)',
      v.toString(v.array([[0, 1, 2, 3], [4, 5, 6, 7]])).replace(/\s/g, '')
    );
    strictEqual(
      'array([[[0,1],[2,3]],[[4,5],[6,7]]],dtype=float32)',
      v.toString(v.array([[[0, 1], [2, 3]], [[4, 5], [6, 7]]])).replace(/\s/g, '')
    );
  });
});
