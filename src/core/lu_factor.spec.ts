import { ok } from 'assert';
import { equals } from './equals';
import { lu_factor } from './lu_factor';
import { array } from './array';

describe('(v) lu_factor', () => {
  it('should work as expected', () => {
    const x = array([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
    const y = array([[2, 4, 7], [0.5, 1, 1.5], [0.5, -1, -2]]);
    const ipiv: Int32Array = new Int32Array([2, 2, 3]);

    const [LU, piv] = x.lu_factor();
    ok(equals(ipiv, piv));
    ok(equals(y, LU));
  });

  it('should work as the static equivalent', () => {
    const x = array([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);

    ok(equals(x.copy().lu_factor(), lu_factor(x)));
  });
});
