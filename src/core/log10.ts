import { NDArray } from './';
import { NDIter } from '../iterator';

const { log10 } = Math;

NDArray.log10 = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).log10();

NDArray.prototype.log10 = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = log10(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
