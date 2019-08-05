import { NDArray } from './';

NDArray.eye = function<T extends NDArray>(this: new(...args: any[]) => T, n: number): T {
  const x: T = new this(new Float32Array(n * n), { shape: [n, n] });

  let i: number;
  let j: number;
  for (i = 0; i < n; i += 1) {
    for (j = 0; j < n; j += 1) {
      x.set(i, j, i === j ? 1 : 0);
    }
  }

  return x;
};
