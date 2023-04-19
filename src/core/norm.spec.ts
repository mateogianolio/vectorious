import { strictEqual } from 'assert';

import { norm } from './norm';
import { array } from './array';

describe('(v) norm', () => {
  it('should return 0 if empty vector', () => {
    strictEqual(0, array().norm());
  });

  it('should work as expected', () => {
    strictEqual(4, array([1, 1, 1, 2, 3]).norm());
  });

  it('should work as the static equivalent', () => {
    strictEqual(4, norm(array([1, 1, 1, 2, 3])));
  });
});
