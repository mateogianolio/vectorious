import { strictEqual } from 'assert';

import { equals } from './equals';
import { array } from './array';

describe('(v) equals', () => {
  it('should work as expected', () => {
    strictEqual(true, array([1, 3, 2]).equals(array([1, 3, 2])));
    strictEqual(true, array().equals(array()));
    strictEqual(false, array([1, 2, 3]).equals(array([1, 3, 2])));
  });

  it('should work as the static equivalent', () => {
    strictEqual(true, equals(array([1, 3, 2]), array([1, 3, 2])));
    strictEqual(true, equals(array(), array()));
    strictEqual(false, equals(array([1, 2, 3]), array([1, 3, 2])));
  });
});
