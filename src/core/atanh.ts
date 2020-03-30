import { NDArray } from './';
import { NDIter } from '../iterator';

const { atanh } = Math;

NDArray.atanh = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).atanh();

NDArray.prototype.atanh = function(): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = atanh(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
