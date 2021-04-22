import { ok } from 'assert';
import { equals } from './equals';
import { push } from './push';
import { array } from './array';

describe('(v) push', () => {
  it('should start with v(1, 2), push(3) to get v(1, 2, 3)', () => {
    ok(equals(array([1, 2, 3]), array([1, 2]).push(3)));
  });

  it('should work as the static equivalent', () => {
    ok(equals(array([1, 2, 3]), push(array([1, 2]), 3)));
  });
});
