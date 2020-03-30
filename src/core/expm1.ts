import { NDArray } from './';
import { NDIter } from '../iterator';

const { expm1 } = Math;

NDArray.expm1 = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).expm1();

NDArray.prototype.expm1 = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = expm1(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
