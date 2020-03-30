import { NDArray } from './';
import { NDIter } from '../iterator';

const { asinh } = Math;

NDArray.asinh = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).asinh();

NDArray.prototype.asinh = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = asinh(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
