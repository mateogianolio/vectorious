import {
  deepStrictEqual,
  throws,
} from 'assert';

import { Vector } from '.';

describe('cross', () => {
  it('should work as expected', () => {
    const x: Vector = new Vector([1, 2, 3]);
    const y: Vector = new Vector([2, 3, 4]);

    deepStrictEqual(new Vector([-1, 2, -1]), x.cross(y));
  });

  it('should throw an exception when lengths do not match', () => {
    const x: Vector = new Vector([1, 2, 3, 4]);
    const y: Vector = new Vector([5, 6, 7]);

    throws(() => { x.cross(y); }, Error);
  });

  it('should work as the static equivalent', () => {
    const x: Vector = new Vector([1, 2, 3]);
    const y: Vector = new Vector([2, 3, 4]);

    deepStrictEqual(new Vector([-1, 2, -1]), Vector.cross(x, y));
  });
});
