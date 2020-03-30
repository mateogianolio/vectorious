import { NDArray } from './';
import { NDIter } from '../iterator';

const { tan } = Math;

NDArray.tan = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).tan();

NDArray.prototype.tan = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = tan(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
