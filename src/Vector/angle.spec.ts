import {
  strictEqual,
} from 'assert';

import { Vector } from '.';

describe('(Vector) angle', () => {
  it('should work as expected', () => {
    const x: Vector = new Vector([1, 0]);
    const y: Vector = new Vector([0, 1]);

    strictEqual(Math.PI / 2, x.angle(y));
  });

  it('should work as the static equivalent', () => {
    const x: Vector = new Vector([1, 0]);
    const y: Vector = new Vector([0, 1]);

    strictEqual(Math.PI / 2, Vector.angle(x, y));
  });
});
