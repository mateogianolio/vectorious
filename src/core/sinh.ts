import { NDArray } from './';
import { NDIter } from '../iterator';

const { sinh } = Math;

NDArray.sinh = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).sinh();

NDArray.prototype.sinh = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = sinh(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
