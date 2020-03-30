import { NDArray } from './';
import { NDIter } from '../iterator';

const { cbrt } = Math;

NDArray.cbrt = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).cbrt();

NDArray.prototype.cbrt = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = cbrt(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
