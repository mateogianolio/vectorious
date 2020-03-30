import { NDArray } from './';
import { NDIter } from '../iterator';

const { sign } = Math;

NDArray.sign = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).sign();

NDArray.prototype.sign = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = sign(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
