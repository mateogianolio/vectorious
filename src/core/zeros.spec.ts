import { ok } from 'assert';
import { equals } from './equals';
import { zeros } from './zeros';
import { array } from './array';

describe('(v) zeros', () => {
  it('should work as expected', () => {
    const x = array([0, 0, 0]);

    ok(equals(x, zeros(3)));
  });

  it('should work as expected in two dimensions', () => {
    const x = array([[0, 0], [0, 0]]);

    ok(equals(x, zeros(2, 2)));
  });
});
