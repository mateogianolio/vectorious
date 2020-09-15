import {
  notStrictEqual,
} from 'assert';

import { equals } from './equals';
import { copy } from './copy';
import { array } from './array';

describe('(v) copy', () => {
  it('should create an immutable copy of class', () => {
    const f32: Float32Array = new Float32Array([1, 2, 3, 4]);
    const original = array(f32);
    const cp = original.copy();

    notStrictEqual(original, cp);
    notStrictEqual(original.data, cp.data);
    equals(original, cp);
  });

  it('should work as the static equivalent', () => {
    const f32: Float32Array = new Float32Array([1, 2, 3, 4]);
    const original = array(f32);
    const cp = copy(original);

    notStrictEqual(original, cp);
    notStrictEqual(original.data, cp.data);
    equals(original, cp);
  });
});
