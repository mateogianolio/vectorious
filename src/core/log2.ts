import { NDArray } from './';
import { NDIter } from '../iterator';

const { log2 } = Math;

NDArray.log2 = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).log2();

NDArray.prototype.log2 = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = log2(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
