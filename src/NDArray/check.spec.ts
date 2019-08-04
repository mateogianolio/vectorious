import {
  doesNotThrow,
  throws,
} from 'assert';

import { NDArray } from '.';

describe('check', () => {
  it('should throw error if the index is NaN', () => {
    const x: NDArray = new NDArray([1, 2, 3, 4]);

    throws(() => { x.check(NaN); }, Error);
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    doesNotThrow(() => { x.check(0); }, Error);
  });
});
