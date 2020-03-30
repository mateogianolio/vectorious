import { NDArray } from './';
import { NDIter } from '../iterator';

const { exp } = Math;

NDArray.exp = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).exp();

NDArray.prototype.exp = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = exp(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
