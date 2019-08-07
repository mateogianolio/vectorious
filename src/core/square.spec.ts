import {
  throws,
} from 'assert';

import { NDArray } from './';

describe('(NDArray) square', () => {
  it('should throw error if matrix is not square', () => {
    const x: NDArray = new NDArray([[0, 0]]);
    throws(() => { x.square(); }, Error);
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([[0, 0]]);
    throws(() => { NDArray.square(x); }, Error);
  });
});
