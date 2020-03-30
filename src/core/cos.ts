import { NDArray } from './';
import { NDIter } from '../iterator';

const { cos } = Math;

NDArray.cos = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).cos();

NDArray.prototype.cos = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = cos(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
