import {
  deepStrictEqual,
  notStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) copy', () => {
  it('should create an immutable copy of class', () => {
    const f32: Float32Array = new Float32Array([1, 2, 3, 4]);
    const original: v = v.array(f32);
    const copy: v = original.copy();

    notStrictEqual(original, copy);
    notStrictEqual(original.data, copy.data);
    deepStrictEqual(original, copy);
  });

  it('should work as the static equivalent', () => {
    const f32: Float32Array = new Float32Array([1, 2, 3, 4]);
    const original: v = v.array(f32);
    const copy: v = v.copy(original);

    notStrictEqual(original, copy);
    notStrictEqual(original.data, copy.data);
    deepStrictEqual(original, copy);
  });
});
