import {
  deepStrictEqual,
} from 'assert';

import { Vector } from '.';

describe('(Vector) toArray', () => {
  it('should work as expected', () => {
    deepStrictEqual([], new Vector().toArray());
    deepStrictEqual([1, 2, 3], new Vector([1, 2, 3]).toArray());
  });

  it('should work as the static equivalent', () => {
    deepStrictEqual([], Vector.toArray(new Vector()));
    deepStrictEqual([1, 2, 3], Vector.toArray(new Vector([1, 2, 3])));
  });
});
