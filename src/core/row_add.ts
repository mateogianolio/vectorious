import { NDArray } from './';

NDArray.row_add = <T extends NDArray>(x: T, dest: number, source: number, scalar: number = 1): T =>
  x.copy().row_add(dest, source, scalar);

NDArray.prototype.row_add = function<T extends NDArray>(this: T, dest: number, source: number, scalar: number = 1): T {
  this.check(dest, 0);
  this.check(source, 0);

  const [, c] = this.shape;
  const { data: d1 } = this;

  let j: number;
  for (j = 0; j < c; j += 1) {
    d1[dest * c + j] += d1[source * c + j] * scalar;
  }

  return this;
};
