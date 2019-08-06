import { NDArray } from './';

NDArray.check = <T extends NDArray>(x: T, ...indices: number[]): void => {
  x.check(...indices);
};

NDArray.prototype.check = function<T extends NDArray>(this: T, ...indices: number[]): void {
  const { shape: s1, length: l1 } = this;

  if (indices.length === 1) {
    const [i] = indices;
    if (i < 0 || i > l1 - 1 || !Number.isFinite(i)) {
      throw new Error('index out of bounds');
    }
  } else if (!s1.every((dim: number, i: number) =>
    dim > indices[i]
    && Number.isFinite(indices[i])
    && indices[i] >= 0
  )) {
    throw new Error('index out of bounds');
  }
};
