import { NDArray } from './';

NDArray.diagonal = <T extends NDArray>(x: T): T => x.copy().diagonal();

NDArray.prototype.diagonal = function<T extends NDArray>(this: T): T {
  this.square();

  const { length: l1 } = this;
  const [r, c] = this.shape;
  const l2: number = Math.min(r, c);

  return this.reshape(l1).slice(0, l1, l2 + 1);
};
