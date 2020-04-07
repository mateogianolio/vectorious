import {
  deepStrictEqual,
} from 'assert';

import { push } from './push';
import { array } from './array';

describe('(v) push', () => {
  it('should start with v(1, 2), push(3) to get v(1, 2, 3)', () => {
    deepStrictEqual(array([1, 2, 3]), array([1, 2]).push(3));
  });

  it('should work as the static equivalent', () => {
    deepStrictEqual(array([1, 2, 3]), push(array([1, 2]), 3));
  });
});
