import {
  notStrictEqual,
} from 'assert';

import { equals } from './equals';
import { copy } from './copy';
import { array } from './array';

describe('(v) copy', () => {
  it('should create an immutable copy of class', () => {
    const f64 = new Float64Array([1, 2, 3, 4]);
    const original = array(f64);
    const cp = original.copy();

    notStrictEqual(original, cp);
    notStrictEqual(original.data, cp.data);
    equals(original, cp);
  });

  it('should work as the static equivalent', () => {
    const f64 = new Float64Array([1, 2, 3, 4]);
    const original = array(f64);
    const cp = copy(original);

    notStrictEqual(original, cp);
    notStrictEqual(original.data, cp.data);
    equals(original, cp);
  });
});
