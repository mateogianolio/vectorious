import { NDArray } from './';
import { NDIter } from '../iterator';

NDArray.mean = <T extends NDArray>(x: T | ArrayLike<any>): number => NDArray.array<T>(x).mean();

NDArray.prototype.mean = function<T extends NDArray>(this: T): number {
  const { data: d1, length: l1 } = this;
  const iter = new NDIter(this);

  let mean: number = 0;
  do {
    mean += d1[iter.pos];

    iter.next();
  } while (!iter.done());

  return mean / l1;
};
