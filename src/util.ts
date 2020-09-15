import {
  DType,
  TypedArray,
  TypedArrayConstructor,
} from './types';

export const flatten: (array: any[]) => number[] = (array: any[]): number[] =>
  array.reduce(
    (acc: any[], next: any): any[] => acc.concat(Array.isArray(next) ? flatten(next) : next),
    []
  );

export const is_typed_array: (array: any) => boolean = (array: any): boolean =>
  !!(array && array.buffer instanceof ArrayBuffer && array.BYTES_PER_ELEMENT);

export const get_length: (shape: number[]) => number = (shape: number[]): number =>
  shape.reduce((a: number, b: number): number => a * b, 1);

export const get_shape: (array: any) => number[] = (array: any): number[] => Array.isArray(array) || is_typed_array(array)
  ? [array.length].concat(get_shape(array[0]))
  : [];

export const get_strides: (shape: number[]) => number[] = (shape: number[]): number[] =>
  [
    ...shape
      .slice(1)
      .map((_: number, i: number): number => shape
        .slice(i + 1)
        .reduce((a: number, b: number): number => a * b, 1)
      ),
    1,
];

export const get_dtype: (array: TypedArray) => DType = (array: TypedArray): DType => {
  const {
    constructor: {
      name = 'Float32Array',
    } = {},
  } = array || {};

  switch (name) {
    case 'Int8Array': return 'int8';
    case 'Uint8Array': return 'uint8';
    case 'Int16Array': return 'int16';
    case 'Uint16Array': return 'uint16';
    case 'Int32Array': return 'int32';
    case 'Uint32Array': return 'uint32';
    case 'Uint8ClampedArray': return 'uint8c';
    case 'Float64Array': return 'float64';
    default: return 'float32';
  }
};

export const get_type: (dtype: DType) => TypedArrayConstructor = (dtype: DType): TypedArrayConstructor => {
  switch (dtype) {
    case 'int8': return Int8Array;
    case 'uint8': return Uint8Array;
    case 'int16': return Int16Array;
    case 'uint16': return Uint16Array;
    case 'int32': return Int32Array;
    case 'uint32': return Uint32Array;
    case 'uint8c': return Uint8ClampedArray;
    case 'float64': return Float64Array;
    default: return Float32Array;
  }
};