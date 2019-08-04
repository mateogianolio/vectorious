import {
  strictEqual,
} from 'assert';

import { Vector } from '.';

describe('toString', () => {
  it('should work as expected', () => {
    strictEqual('[1, 2, 3]', new Vector([1, 2, 3]).toString());
  });

  it('should work as the static equivalent', () => {
    strictEqual('[1, 2, 3]', Vector.toString(new Vector([1, 2, 3])));
  });
});
