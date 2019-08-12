import {
  doesNotThrow,
  throws,
} from 'assert';

import v = require('..');

describe('(v) check', () => {
  it('should throw error if the index is NaN', () => {
    const x: v = v.array([1, 2, 3, 4]);

    throws(() => { x.check(NaN); }, Error);
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    doesNotThrow(() => { x.check(0); }, Error);
  });
});
