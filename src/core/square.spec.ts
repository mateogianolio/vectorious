import {
  throws,
} from 'assert';

import v = require('..');

describe('(v) square', () => {
  it('should throw error if matrix is not square', () => {
    const x: v = v.array([[0, 0]]);
    throws(() => { x.square(); }, Error);
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([[0, 0]]);
    throws(() => { v.square(x); }, Error);
  });
});
