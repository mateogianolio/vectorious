import { NDArray } from './';

/**
 * Creates an array containing ones (`1`) of shape `shape`
 */
NDArray.ones = function<T extends NDArray>(this: new(...args: any[]) => T, ...shape: number[]): T {
  return new this(
    new Float32Array(shape.reduce((sum: number, dim: number) => sum * dim, 1)),
    { shape }
  ).fill(1);
};
