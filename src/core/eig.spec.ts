import {
  ok,
  throws,
} from 'assert';

import { equals } from './equals';
import { eig } from './eig';
import { array } from './array';

describe('(v) eig', () => {
  it('should throw error if matrix is not square', () => {
    const x = array([[1, 2]]);

    throws(() => { x.eig(); }, Error);
  });

  it('should work as expected', () => {
    const x = array([
      [1, 0, 0],
      [0, 2, 0],
      [0, 0, 3],
    ]);
    const y = array([1, 2, 3]);
    const z = array([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ]);

    const [e, E] = x.eig();

    ok(equals(y, e));
    ok(equals(z, E));
  });

  it('should work as the static equivalent', () => {
    const x = array([
      [1, 0, 0],
      [0, 2, 0],
      [0, 0, 3],
    ]);

    ok(equals(x.copy().eig(), eig(x)));
  });
});
