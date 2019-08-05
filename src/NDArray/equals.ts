import { NDArray } from './';

NDArray.equals = <T extends NDArray>(x: T, y: T): boolean => x.equals(y);

NDArray.prototype.equals = function<T extends NDArray>(this: T, x: T): boolean {
  this.equilateral(x);
  this.equidimensional(x);

  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    if (this.get(i) !== x.get(i)) {
      return false;
    }
  }

  return true;
};
