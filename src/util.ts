import { TypedArray, TypedArrayConstructor } from './types';

export const flatten: (input: any[]) => number[] = (input: any[]): number[] =>
  input.reduce(
    (acc: any[], next: any) => acc.concat(Array.isArray(next) ? flatten(next) : next),
    []
  );

export const shape: (input: any) => number[] = (input: any): number[] => Array.isArray(input)
  ? [input.length].concat(shape(input[0]))
  : [];

export const type: (input: TypedArray) => TypedArrayConstructor = (input: TypedArray): TypedArrayConstructor => {
  switch (input.constructor.name) {
    case 'Int8Array': return Int8Array;
    case 'Uint8Array': return Uint8Array;
    case 'Int16Array': return Int16Array;
    case 'Uint16Array': return Uint16Array;
    case 'Int32Array': return Int32Array;
    case 'Uint32Array': return Uint32Array;
    case 'Uint8ClampedArray': return Uint8ClampedArray;
    case 'Float64Array': return Float64Array;
    default: return Float32Array;
  }
};

export const isTypedArray: (input: any) => boolean = (input: any): boolean =>
  !!(input && input.buffer instanceof ArrayBuffer && input.BYTES_PER_ELEMENT);
