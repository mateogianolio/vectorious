import {
  doesNotThrow,
  throws,
} from 'assert';

import { check } from './check';
import { array } from './array';
import { random } from './random';

describe('(v) check', () => {
  it('should throw error if the index is NaN', () => {
    const x = array([1, 2, 3, 4]);

    throws(() => { x.check(NaN); }, Error);
  });

  it('should work as the static equivalent', () => {
    const x = random(3);

    doesNotThrow(() => { check(x, 0); }, Error);
  });
});
