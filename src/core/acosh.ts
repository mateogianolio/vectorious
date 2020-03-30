import { NDArray } from './';
import { NDIter } from '../iterator';

const { acosh } = Math;

NDArray.acosh = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).acosh();

NDArray.prototype.acosh = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = acosh(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
