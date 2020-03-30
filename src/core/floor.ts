import { NDArray } from './';
import { NDIter } from '../iterator';

const { floor } = Math;

NDArray.floor = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).floor();

NDArray.prototype.floor = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = floor(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
