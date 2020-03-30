import { NDArray } from './';
import { NDIter } from '../iterator';

const { sqrt } = Math;

NDArray.sqrt = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).sqrt();

NDArray.prototype.sqrt = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = sqrt(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
