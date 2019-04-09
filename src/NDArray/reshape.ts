import { INDArray } from '../types';

/**
 * Reshapes the array
 */
export function reshape<T extends INDArray<T>>(this: T, shape: number[]): T {
  const { length } = this;
  if (shape.reduce((sum: number, dim: number) => sum * dim, 1) !== length) {
    throw new Error(`shape ${shape} does not match length ${length}`);
  }

  this.shape = shape;

  return this;
};
