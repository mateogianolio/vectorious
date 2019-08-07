import { NDArray } from './';

NDArray.matrix = function<T extends NDArray>(this: new(...args: any[]) => T, r: number, c: number): T {
  return new this(
    new Float32Array(r * c),
    { shape: [r, c] }
  );
};
