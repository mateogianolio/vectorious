import { NDArray } from './';
import { NDIter } from '../iterator';

const { acos } = Math;

NDArray.acos = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).acos();

NDArray.prototype.acos = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = acos(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
