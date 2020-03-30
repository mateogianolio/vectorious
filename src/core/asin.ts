import { NDArray } from './';
import { NDIter } from '../iterator';

const { asin } = Math;

NDArray.asin = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).asin();

NDArray.prototype.asin = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = asin(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
