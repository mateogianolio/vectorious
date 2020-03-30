import { NDArray } from './';
import { NDIter } from '../iterator';

NDArray.sum = <T extends NDArray>(x: T | ArrayLike<any>): number => NDArray.array<T>(x).sum();

NDArray.prototype.sum = function<T extends NDArray>(this: T): number {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  let sum: number = 0;
  do {
    sum += d1[iter.pos];

    iter.next();
  } while (!iter.done());

  return sum;
};
