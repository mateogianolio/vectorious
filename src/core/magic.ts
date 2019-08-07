import { TypedArray } from '../types';

import { NDArray } from './';

const magicHelper: (n: number, x: number, y: number) => number = (n: number, x: number, y: number): number =>
  (x + y * 2 + 1) % n;

NDArray.magic = function<T extends NDArray>(this: new(...args: any[]) => T, size: number): T {
  if (size < 0) {
    throw new Error('invalid size');
  }

  const d1: TypedArray = new Float32Array(size * size);

  let i: number;
  let j: number;
  for (i = 0; i < size; i += 1) {
    for (j = 0; j < size; j += 1) {
      d1[(size - i - 1) * size + (size - j - 1)] =
        magicHelper(size, size - j - 1, i) * size + magicHelper(size, j, i) + 1;
    }
  }

  return new this(d1, { shape: [size, size] });
};
