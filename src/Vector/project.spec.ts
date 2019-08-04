import {
  deepStrictEqual,
  throws,
} from 'assert';

import { Vector } from '.';

describe('project', () => {
  it('should throw error if sizes do not match', () => {
    const x: Vector = new Vector([1]);
    const y: Vector = new Vector([1, 2]);

    throws(() => { x.project(y); }, Error);
  });

  it('should work as expected', () => {
    const x: Vector = new Vector([2, 1]);
    const y: Vector = new Vector([-3, 4]);
    const z: Vector = new Vector([6 / 25, -8 / 25]);

    deepStrictEqual(z, x.project(y));
  });

  it('should work as the static equivalent', () => {
    const x: Vector = new Vector([2, 1]);
    const y: Vector = new Vector([-3, 4]);
    const z: Vector = new Vector([6 / 25, -8 / 25]);

    deepStrictEqual(z, Vector.project(x, y));
  });
});
