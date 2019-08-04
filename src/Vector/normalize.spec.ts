import {
  deepStrictEqual,
} from 'assert';

import { Vector } from '.';

describe('normalize', () => {
  it('should work as expected', () => {
    const x: Vector = new Vector([1, 1]);
    const y: Vector = new Vector([1 / Math.sqrt(2), 1 / Math.sqrt(2)]);

    deepStrictEqual(y, x.normalize());
  });

  it('should work as the static equivalent', () => {
    const x: Vector = new Vector([1, 1]);
    const y: Vector = new Vector([1 / Math.sqrt(2), 1 / Math.sqrt(2)]);

    deepStrictEqual(y, Vector.normalize(x));
  });
});
