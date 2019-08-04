import { TypedArray, TypedArrayConstructor } from '../types';

import { Matrix } from './';

const magicHelper: (n: number, x: number, y: number) => number = (n: number, x: number, y: number): number =>
  (x + y * 2 + 1) % n;

/**
 * Creates a magic square matrix of `size`
 */
Matrix.magic = <T extends Matrix>(size: number, type: TypedArrayConstructor = Float32Array): T => {
  if (size < 0) {
    throw new Error('invalid size');
  }

  const data: TypedArray = new type(size * size);

  let i: number;
  let j: number;
  for (i = 0; i < size; i += 1) {
    for (j = 0; j < size; j += 1) {
      data[(size - i - 1) * size + (size - j - 1)] =
        magicHelper(size, size - j - 1, i) * size + magicHelper(size, j, i) + 1;
    }
  }

  return new Matrix(data, { shape: [size, size] }) as T;
};