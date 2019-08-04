import {
  deepStrictEqual,
} from 'assert';

import { Vector } from '.';

describe('combine', () => {
  it('should return current vector if combined with empty vector', () => {
    deepStrictEqual(new Vector([1, 2, 3]), new Vector([1, 2, 3]).combine(new Vector()));
  });

  it('should work as expected', () => {
    deepStrictEqual(new Vector([1, 2, 3, 0, 1]), new Vector([1, 2, 3]).combine(new Vector([0, 1])));
  });

  it('should work as the static equivalent', () => {
    deepStrictEqual(new Vector([1, 2, 3, 0, 1]), Vector.combine(new Vector([1, 2, 3]), new Vector([0, 1])));
  });
});
