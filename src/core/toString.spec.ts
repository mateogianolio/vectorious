import {
  strictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) toString', () => {
  it('should work as expected', () => {
    strictEqual('[1, 2, 3]', new NDArray([1, 2, 3]).toString());
  });

  it('should work as the static equivalent', () => {
    strictEqual('[1, 2, 3]', NDArray.toString(new NDArray([1, 2, 3])));
  });
});
