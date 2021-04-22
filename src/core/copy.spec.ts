import {
  ok,
  notStrictEqual,
} from 'assert';

import { equals } from './equals';
import { copy } from './copy';
import { array } from './array';

describe('(v) copy', () => {
  it('should create an immutable copy of class', () => {
    const original = array([1, 2, 3, 4]);
    const cp = original.copy();

    notStrictEqual(original, cp);
    notStrictEqual(original.data, cp.data);
    ok(equals(original, cp));
  });

  it('should move data into c-contiguous order', () => {
    const original = array([[0, 1, 2], [3, 4, 5], [6, 7, 8]]).T;
    const cp = original.copy();

    notStrictEqual(original, cp);
    notStrictEqual(original.data, cp.data);
  });

  it('should work as the static equivalent', () => {
    const original = array([1, 2, 3, 4]);
    const cp = copy(original);

    notStrictEqual(original, cp);
    notStrictEqual(original.data, cp.data);
    ok(equals(original, cp));
  });
});
