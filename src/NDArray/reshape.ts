import { NDArray } from './';

NDArray.reshape = <T extends NDArray>(x: T, ...shape: number[]): T => x.copy().reshape(...shape);

NDArray.prototype.reshape = function<T extends NDArray>(this: T, ...shape: number[]): T {
  const { length } = this;
  if (shape.reduce((sum: number, dim: number) => sum * dim, 1) !== length) {
    throw new Error(`shape ${shape} does not match length ${length}`);
  }

  this.shape = shape;

  return this;
};
