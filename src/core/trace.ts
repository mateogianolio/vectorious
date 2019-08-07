import { NDArray } from './';

NDArray.trace = <T extends NDArray>(x: T): number => x.trace();

NDArray.prototype.trace = function<T extends NDArray>(this: T): number {
  const [r, c] = this.shape;
  const n: number = Math.min(r, c);

  let result: number = 0;

  let j: number;
  for (j = 0; j < n; j += 1) {
    result += this.get(j, j);
  }

  return result;
};
