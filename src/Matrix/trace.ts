import { Matrix } from './';

Matrix.trace = <T extends Matrix>(x: T): number => x.trace();

Matrix.prototype.trace = function<T extends Matrix>(this: T): number {
  const [r, c] = this.shape;
  const n: number = Math.min(r, c);

  let result: number = 0;

  let j: number;
  for (j = 0; j < n; j += 1) {
    result += this.get(j, j);
  }

  return result;
};
