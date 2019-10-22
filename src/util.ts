import {
  DType,
  TypedArray,
  TypedArrayConstructor,
} from './types';

export const flatten: (input: any[]) => number[] = (input: any[]): number[] =>
  input.reduce(
    (acc: any[], next: any) => acc.concat(Array.isArray(next) ? flatten(next) : next),
    []
  );

export const get_shape: (input: any) => number[] = (input: any): number[] => Array.isArray(input)
  ? [input.length].concat(get_shape(input[0]))
  : [];

export const get_strides: (input: number[]) => number[] = (input: number[]): number[] =>
  input.map((_) => input.slice(1).reduce((a: number, b: number): number => a * b, 1));

export const get_dtype: (input: TypedArray) => DType = (input: TypedArray): DType => {
  switch (input.constructor.name) {
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

export const get_type: (input: DType) => TypedArrayConstructor = (input: DType): TypedArrayConstructor => {
  switch (input) {
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

export const is_typed_array: (input: any) => boolean = (input: any): boolean =>
  !!(input && input.buffer instanceof ArrayBuffer && input.BYTES_PER_ELEMENT);
