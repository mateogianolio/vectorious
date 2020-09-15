import {
  throws,
} from 'assert';

import { square } from './square';
import { array } from './array';

describe('(v) square', () => {
  it('should throw error if matrix is not square', () => {
    const x = array([[0, 0]]);
    throws(() => { x.square(); }, Error);
  });

  it('should work as the static equivalent', () => {
    const x = array([[0, 0]]);
    throws(() => { square(x); }, Error);
  });
});
