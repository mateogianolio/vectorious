import {
  deepStrictEqual,
} from 'assert';

import { Matrix } from './';

describe('toArray', () => {
  it('should work as expected', () => {
    deepStrictEqual([[1, 2], [3, 4]], new Matrix([[1, 2], [3, 4]]).toArray());
    deepStrictEqual([[1, 2], [3, 4], [5, 6]], new Matrix([[1, 2], [3, 4], [5, 6]]).toArray());
  });

  it('should work as the static equivalent', () => {
    const x: Matrix = new Matrix([[1, 1, 1]]);

    deepStrictEqual(x.copy().toArray(), Matrix.toArray(x));
  });
});
