import {
  deepStrictEqual,
} from 'assert';

import { eye } from './eye';
import { array } from './array';

describe('(v) eye', () => {
  it('should work as expected', () => {
    const x = array([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);

    deepStrictEqual(x, eye(3));
  });
});
