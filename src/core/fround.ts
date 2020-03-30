import { NDArray } from './';
import { NDIter } from '../iterator';

const { fround } = Math;

NDArray.fround = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).fround();

NDArray.prototype.fround = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = fround(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
