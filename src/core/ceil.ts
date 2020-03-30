import { NDArray } from './';
import { NDIter } from '../iterator';

const { ceil } = Math;

NDArray.ceil = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).ceil();

NDArray.prototype.ceil = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = ceil(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
