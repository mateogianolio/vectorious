import {
  deepStrictEqual,
} from 'assert';

import { Vector } from '.';

describe('(Vector) push', () => {
  it('should start with Vector(1, 2), push(3) to get Vector(1, 2, 3)', () => {
    deepStrictEqual(new Vector([1, 2, 3]), new Vector([1, 2]).push(3));
  });

  it('should work as the static equivalent', () => {
    deepStrictEqual(new Vector([1, 2, 3]), Vector.push(new Vector([1, 2]), 3));
  });
});
