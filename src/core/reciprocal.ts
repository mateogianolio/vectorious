import { NDArray } from './';
import { NDIter } from '../iterator';

NDArray.reciprocal = <T extends NDArray>(x: T | ArrayLike<any>): T =>
  NDArray.array<T>(x).reciprocal();

NDArray.prototype.reciprocal = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = 1 / d1[iter.pos];

    iter.next();
  } while (!iter.done());

  return this;
};
