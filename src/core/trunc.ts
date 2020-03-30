import { NDArray } from './';
import { NDIter } from '../iterator';

const { trunc } = Math;

NDArray.trunc = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).trunc();

NDArray.prototype.trunc = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = trunc(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
