import { deepStrictEqual, strictEqual } from 'assert';

import { array } from '../core/array';
import { NDIter } from '.';

describe('(NDIter) constructor', () => {
  it('should work as expected', () => {
    const x = array([0, 1, 2]);
    const iter = new NDIter(x);

    deepStrictEqual(iter.next(), {
      value: 0,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: 1,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: 2,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: undefined,
      done: true,
    });
  });

  it('should work as expected in two dimensions', () => {
    const x = array([
      [0, 1],
      [2, 3],
    ]);
    const iter = new NDIter(x);

    deepStrictEqual(iter.next(), {
      value: 0,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: 1,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: 2,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: 3,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: undefined,
      done: true,
    });
  });

  it('should work as expected with inverted strides', () => {
    const x = array([
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ]).T;
    const iter = new NDIter(x);

    deepStrictEqual(iter.next(), {
      value: 0,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: 3,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: 6,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: 1,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: 4,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: 7,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: 2,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: 5,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: 8,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: undefined,
      done: true,
    });
  });

  it('should work as expected with custom shape and strides', () => {
    /*
    array([
      [ 0, 2 ],
      [ 3, 5 ],
      [ 6, 8 ]
    ], dtype=float64)
     */
    const x = array([
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ], {
      shape: [3, 2],
      strides: [3, 2],
    });
    const iter = new NDIter(x);

    deepStrictEqual(iter.next(), {
      value: 0,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: 2,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: 3,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: 5,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: 6,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: 8,
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: undefined,
      done: true,
    });
  });

  it('should work in for...of loops', () => {
    const x = array([
      [0, 1],
      [2, 3],
    ]);
    const iter = new NDIter(x);

    let i = 0;
    for (const value of iter) {
      strictEqual(value, i++);
    }
  });

  it('should work in do...while loops', () => {
    const x = array([
      [0, 1],
      [2, 3],
    ]);
    const iter = new NDIter(x);

    let i = 0;
    do {
      strictEqual(iter.next().value, i++);
    } while (!iter.done());
  });
});
