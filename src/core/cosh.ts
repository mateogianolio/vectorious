import { NDArray } from './';
import { NDIter } from '../iterator';

const { cosh } = Math;

NDArray.cosh = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).cosh();

NDArray.prototype.cosh = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = cosh(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
