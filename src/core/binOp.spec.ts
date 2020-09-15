import {
  throws,
} from 'assert';

import { equals } from './equals';
import { binOp } from './binOp';
import { array } from './array';

describe('(v) binOp', () => {
  it('should work as expected', () => {
    const x = array([1, 1, 1]);
    const y = array([1, 2, 3]);
    const z = array([2, 3, 4]);
    const sum: (a: number, b: number) => number = (a: number, b: number): number => a + b;

    equals(x.binOp(y, sum), z);
  });

  it('should throw error when sizes do not match', () => {
    const x = array([1, 1, 1]);
    const y = array([1, 2, 3, 4]);
    const sum: (a: number, b: number) => number = (a: number, b: number): number => a + b;

    throws(() => { x.binOp(y, sum); }, Error);
  });

  it(
    'should work as the static equivalent of a.binOp(b, (a, b) => a + b)',
    () => {
      const x = array([1, 1, 1]);
      const y = array([1, 2, 3]);
      const sum: (a: number, b: number) => number = (a: number, b: number): number => a + b;

      equals(x.copy().binOp(y, sum), binOp(x, y, sum));
    }
  );
});
