import {
  deepStrictEqual,
  strictEqual,
} from 'assert';

import {
  flatten,
  get_dtype,
  get_shape,
  get_type,
  is_typed_array,
} from './util';

describe('(util) flatten', () => {
  it('should work as expected', () => {
    const x: number[] = [1, 2, 3];
    const y: number[][] = [[1], [2], [3]];
    const z: number[][][] = [[[1]], [[2]], [[3]]];

    deepStrictEqual(flatten(x), x);
    deepStrictEqual(flatten(y), x);
    deepStrictEqual(flatten(z), x);
  });
});

describe('(util) shape', () => {
  it('should work as expected', () => {
    const x: number[] = [1, 2, 3];
    const y: number[][] = [[1], [2], [3]];
    const z: number[][][] = [[[1]], [[2]], [[3]]];

    deepStrictEqual(get_shape(x), [3]);
    deepStrictEqual(get_shape(y), [3, 1]);
    deepStrictEqual(get_shape(z), [3, 1, 1]);
  });
});

describe('(util) get_type', () => {
  it('should work as expected', () => {
    deepStrictEqual(get_type('int8'), Int8Array);
    deepStrictEqual(get_type('uint8'), Uint8Array);
    deepStrictEqual(get_type('int16'), Int16Array);
    deepStrictEqual(get_type('uint16'), Uint16Array);
    deepStrictEqual(get_type('int32'), Int32Array);
    deepStrictEqual(get_type('uint32'), Uint32Array);
    deepStrictEqual(get_type('uint8c'), Uint8ClampedArray);
    deepStrictEqual(get_type('float32'), Float32Array);
    deepStrictEqual(get_type('float64'), Float64Array);
  });
});

describe('(util) get_dtype', () => {
  it('should work as expected', () => {
    deepStrictEqual(get_dtype(new Int8Array()), 'int8');
    deepStrictEqual(get_dtype(new Uint8Array()), 'uint8');
    deepStrictEqual(get_dtype(new Int16Array()), 'int16');
    deepStrictEqual(get_dtype(new Uint16Array()), 'uint16');
    deepStrictEqual(get_dtype(new Int32Array()), 'int32');
    deepStrictEqual(get_dtype(new Uint32Array()), 'uint32');
    deepStrictEqual(get_dtype(new Uint8ClampedArray()), 'uint8c');
    deepStrictEqual(get_dtype(new Float32Array()), 'float32');
    deepStrictEqual(get_dtype(new Float64Array()), 'float64');
  });
});

describe('(util) is_typed_array', () => {
  it('should work as expected', () => {
    strictEqual(is_typed_array(new Int8Array()), true);
    strictEqual(is_typed_array(new Uint8Array()), true);
    strictEqual(is_typed_array(new Int16Array()), true);
    strictEqual(is_typed_array(new Uint16Array()), true);
    strictEqual(is_typed_array(new Int32Array()), true);
    strictEqual(is_typed_array(new Uint32Array()), true);
    strictEqual(is_typed_array(new Uint8ClampedArray()), true);
    strictEqual(is_typed_array(new Float32Array()), true);
    strictEqual(is_typed_array(new Float64Array()), true);
  });
});
