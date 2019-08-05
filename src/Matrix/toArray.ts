import { Matrix } from './';

Matrix.toArray = <T extends Matrix>(x: T): number[][] => x.toArray();

Matrix.prototype.toArray = function<T extends Matrix>(this: T): number[][] {
  const { data: d1 } = this;
  const [r, c] = this.shape;
  const result: number[][] = [];

  let i: number;
  for (i = 0; i < r; i += 1) {
    result.push(Array.prototype.slice.call(d1.subarray(i * c, (i + 1) * c)));
  }

  return result;
};
