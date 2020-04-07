import {
  deepStrictEqual, strictEqual,
} from 'assert';

import { array } from '../core/array';
import { NDIter } from '.';

describe('(NDIter) constructor', () => {
  it('should work as expected', () => {
    const x = array([0, 1, 2]);
    const iter: NDIter = new NDIter(x);

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
    const x = array([[0, 1], [2, 3]]);
    const iter: NDIter = new NDIter(x);

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

  it('should work in for...of loops', () => {
    const x = array([[0, 1], [2, 3]]);
    const iter: NDIter = new NDIter(x);

    let i = 0;
    strictEqual(iter.pos, i);
    for (const pos of iter) {
      strictEqual(pos, ++i);
    }
  });

  it('should work in do...while loops', () => {
    const x = array([[0, 1], [2, 3]]);
    const iter: NDIter = new NDIter(x);

    let i = 0;
    do {
      strictEqual(iter.pos, i++);

      iter.next();
    } while (!iter.done());
  });
});
