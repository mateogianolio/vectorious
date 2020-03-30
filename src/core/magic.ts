import { TypedArray } from '../types';

import { NDArray } from './';
import { NDIter } from '../iterator';

NDArray.magic = function<T extends NDArray>(this: new(...args: any[]) => T, n: number): T {
  if (n < 0) {
    throw new Error('invalid n');
  }

  const d1: TypedArray = new Float32Array(n * n);
  const magic: T = new this(d1, { shape: [n, n] });
  const iter = new NDIter(magic);

  do {
    const [y, x] = iter.coords;
    const i = n - y - 1;
    const j = n - x - 1;

    d1[iter.pos] = ((x + i * 2 + 1) % n) * n + ((j + i * 2 + 1) % n) + 1;

    iter.next();
  } while (!iter.done());

  return magic;
};
