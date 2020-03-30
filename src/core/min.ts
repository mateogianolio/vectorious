import { NDArray } from './';
import { NDIter } from '../iterator';

NDArray.min = <T extends NDArray>(x: T | ArrayLike<any>): number => NDArray.array<T>(x).min();

NDArray.prototype.min = function<T extends NDArray>(this: T): number {
  const { data: d1 } = this;

  const iter = new NDIter(this);

  let min: number = Number.POSITIVE_INFINITY;
  do {
    const value = d1[iter.pos];
    if (min > value) {
      min = value;
    }

    iter.next();
  } while (!iter.done());

  return min;
};
