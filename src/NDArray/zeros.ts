import { NDArray } from './';

NDArray.zeros = function<T extends NDArray>(this: new(...args: any[]) => T, ...shape: number[]): T {
  return new this(
    new Float32Array(shape.reduce((sum: number, dim: number) => sum * dim, 1)),
    { shape }
  ).fill(0);
};
