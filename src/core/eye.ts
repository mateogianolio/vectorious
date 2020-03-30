import { NDArray } from './';

NDArray.eye = function<T extends NDArray>(this: new(...args: any[]) => T, n: number): T {
  const x: T = new this(new Float32Array(n * n), { shape: [n, n] });
  const { data: d1 } = x;

  let i: number;
  for (i = 0; i < n; i += 1) {
    d1[i * n + i] = 1;
  }

  return x;
};
