import { NDArray } from './';

/**
 * Asserts if indices `i, j, ..., n` are within the bounds of `x`
 */
NDArray.check = <T extends NDArray>(x: T, ...indices: number[]): void => {
  x.check(...indices);
};

/**
 * Asserts if indices `i, j, ..., n` are within the bounds of current array
 */
NDArray.prototype.check = function<T extends NDArray>(this: T, ...indices: number[]): void {
  const { shape: s1 } = this;

  if (!s1.every((dim: number, i: number) => dim > indices[i] && Number.isFinite(indices[i]) && indices[i] >= 0)) {
    throw new Error('index out of bounds');
  }
};
