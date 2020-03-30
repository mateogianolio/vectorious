import { NDArray } from './';
import { NDIter } from '../iterator';

const { log1p } = Math;

NDArray.log1p = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).log1p();

NDArray.prototype.log1p = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = log1p(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
